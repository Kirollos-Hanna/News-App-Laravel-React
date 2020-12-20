import {parseResponse} from "../../../../ComponentsTool/resources/js/helpers.js";

const state = () => ({
    favorites: [],
    users: [],
    options: [],
    isGridLoading: true,
    page: 1,
    favoriteFilterInputs: [],
    totalFavoriteCount: 0,
});

const mutations = {
    setFavorites(state, favorites){
        state.favorites = favorites;
    },
    setInput(state, input){
        state.favoriteFilterInputs = input;
    },
    setPage(state, page){
        state.page = page;
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
        context.dispatch('getCountOfFavorites');
        const [options] = args;
        const {num, filters, page} = options;

        let statusFilters = {};
        for(let i = 1; i <= num; i++){
            statusFilters[i] = filters.includes(i);
        }
        statusFilters['None'] = filters.includes(0);

        let filterStr = '[{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByUser","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateAfterFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateBeforeFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByStatus","value":'+JSON.stringify(statusFilters)+'}]';
        let encodedFilterStr = btoa(filterStr);
        let favorites = [];
            Nova.request()
            .get("/nova-api/favorites?filters="+encodedFilterStr+"&trashed=with&page="+ page)
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
                        status: fields.ComputedField,
                    };
                    favorites.push(item);
                });
                context.dispatch('setUsers');
        });
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
                context.dispatch('getCountOfFavorites');
        });
    },
    getCountOfFavorites(context){

        let statusFilters = {};
        for(let i = 1; i <= context.state.options.length; i++){
            statusFilters[i] = context.state.favoriteFilterInputs.includes(i);
        }
        statusFilters['None'] = context.state.favoriteFilterInputs.includes(0);
        let filterStr = '[{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByUser","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateAfterFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateBeforeFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByStatus","value":'+JSON.stringify(statusFilters)+'}]';
        let encodedFilterStr = btoa(filterStr);
        Nova.request()
        .get("/nova-api/favorites/count?search=&filters="+encodedFilterStr+"&orderBy=&perPage=25&trashed=with&page="+context.state.page+"&relationshipType=")
        .then((res)=> context.state.totalFavoriteCount = res.data.count);
    }
}

const namespaced = true;

export default {state, mutations, getters, actions, namespaced};