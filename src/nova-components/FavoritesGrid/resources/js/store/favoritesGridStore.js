import {parseResponse} from "../../../../ComponentsTool/resources/js/helpers.js";

const state = () => ({
    favorites: [],
    users: [],
    options: [],
    isGridLoading: true,
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
    formatDisplayedData(state)  {
        state.favorites.map((favorite) => {
          let elm = state.users.find((elm) => elm.name === favorite.user);
          favorite["email"] = elm? elm.email: null;
          favorite["status"] = favorite["status"]? favorite["status"].map((status) => status.status).join(", ") : "";
          if (!favorite["author"]) favorite["author"] = "";
          if (!favorite["created_at"]) favorite["created_at"] = "";
          return favorite;
        });
    },
    setIsLoading(state, loadingStatus){
        state.isGridLoading = loadingStatus;
    }
};

const getters = {}

const actions = {
    setFavorites(context, ...args){
        context.commit('setIsLoading', true);
        const [options] = args;
        const {num, filters} = options;

        let statusExistsFilter = "";
        if(filters.includes(0)){
            statusExistsFilter = 0;
        }
        let statusFilters = {};
        for(let i = 1; i <= num; i++){
            statusFilters[i] = filters.includes(i);
        }
        let filterStatusStr = '[{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByUser","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateAfterFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateBeforeFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByStatus","value":'+ JSON.stringify(statusFilters) +'},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteWithStatus","value":""}]';
        let filterNoStatusStr = '[{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByUser","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateAfterFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateBeforeFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByStatus","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteWithStatus","value":"'+statusExistsFilter+'"}]';
        let encodedFilterStr = btoa(filterStatusStr);
        let encodedNoStatusFilterStr = btoa(filterNoStatusStr);
        let favorites = [];
        if(!filters.includes(0) || (filters.length > 1 && filters.includes(0)) || filters.length === 0){
            Nova.request()
                .get("/nova-api/favorites?filters="+encodedFilterStr+"&trashed=with")
                .then((res) => {
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
                    context.dispatch('setUsers');
            });
        }
        if(filters.includes(0)){
            Nova.request()
                .get("/nova-api/favorites?filters="+encodedNoStatusFilterStr+"&trashed=with")
                .then((res) => {
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
                        item['status'] = [];
                        favorites.push(item);
                    });
                    context.dispatch('setUsers');
            });
        }
        context.commit('setFavorites', favorites);
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
                context.commit('setIsLoading', false);
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