import {parseResponse} from "../../../../ComponentsTool/resources/js/helpers.js";

const state = () => ({
    favorites: [],
    users: [],
    options: [],
});

const mutations = {
    setFavorites(state, favorites){
        state.favorites = favorites;
    },
    setUsers(state, users){
        state.users = users;
    },
    setStatusOptions(state, options){
        state.options = options;
    },
    formatDisplayedData(state) {
        state.favorites.map((item) => {
          let elm = state.users.find((elm) => elm.name === item.user);
          item["email"] = elm? elm.email: null;
          item["status"] = item["status"].map((status) => status.status).join(", ");
          if (!item["author"]) item["author"] = "";
          if (!item["created_at"]) item["created_at"] = "";
          return item;
        });
    },
};

const getters = {}

const actions = {
    setFavorites(context, ...args){
        const [options] = args;
        const {num, filters} = options;

        let statusFilters = {};
        for(let i = 1; i <= num; i++){
            statusFilters[i] = filters.includes(i);
        }

        let filterStr = '[{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByUser","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateAfterFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateBeforeFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByStatus","value":'+ JSON.stringify(statusFilters) +'}]';
        let encodedFilterStr = btoa(filterStr);
        Nova.request()
            .get("/nova-api/favorites?filters="+encodedFilterStr+"&trashed=with")
            .then((res) => {
                let favorites = [];
                const arrayOfFields = parseResponse(res);

                arrayOfFields.forEach((fields) => {
                    let item = {
                        id: fields.id,
                        title: fields.title,
                        source: fields.source,
                        author: fields.author,
                        posting_date: fields.posting_date,
                        created_at: fields.created_at,
                        user: fields.user,
                        softDeleted: fields.softDeleted,
                    };
                    context.dispatch('setStatusPerFavorite', fields.id).then((res) => {
                        item['status'] = res
                        favorites.push(item);
                    });
                });
                context.commit('setFavorites', favorites);
                context.dispatch('setUsers');
        });
    },
    setUsers(context){
        Nova.request()
            .get("/nova-api/users")
            .then((res) => {
                let users = [];
                const arrayOfFields = parseResponse(res);
                arrayOfFields.forEach((fields) => {
                    users.push({ name: fields.name, email: fields.email });
                });
                context.commit('setUsers', users);
                context.commit('formatDisplayedData');
        });
    },
    setStatusPerFavorite(context, favoriteID){
        let statusForFavorite = [];
        Nova.request()
            .get("/nova-api/statuses?trashed=with&viaResource=favorites&viaResourceId="+favoriteID+"&viaRelationship=status&relationshipType=belongsToMany")
            .then((res) => {
                const arrayOfFields = parseResponse(res);
                arrayOfFields.forEach((fields) => {
                    statusForFavorite.push({ favorite_id: favoriteID, status_id: fields.id, status: fields.status });
                });
                return statusForFavorite;
        });
        return statusForFavorite;
    },
    setStatusOptions(context){
        Nova.request()
            .get("/nova-api/statuses")
            .then((res) => {
                let options = [];
                const arrayOfFields = parseResponse(res);
                arrayOfFields.forEach((fields) => {
                    options.push({ id: fields.id, name: fields.status });
                });
                context.commit('setStatusOptions', options);
                context.dispatch('setFavorites', {num:options.length, filters: []});
        });
    },
}

const namespaced = true;

export default {state, mutations, getters, actions, namespaced};