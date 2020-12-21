import {parseResponse} from "../../../../ComponentsTool/resources/js/helpers.js";

const state = () => ({
    favorites: [],
    users: [],
    options: [],
    page: 1,
    favoriteFilterInputs: [],
    totalFavoriteCount: 0,
    itemsPerPage: 25,
    isEmpty: false,
});

const mutations = {
    setFavorites(state, favorites){
        state.favorites = favorites;
    },
    setIsEmpty(state, isEmpty){
        state.isEmpty = isEmpty;
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
    setTotalFavoriteCount(state, totalFavoriteCount){
        state.totalFavoriteCount = totalFavoriteCount;
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
    }
};

const getters = {}

const actions = {
    setFavorites(context, ...args){
        const [options] = args;
        const {num, filters, page} = options;

        context.commit("setInput", filters);
        context.dispatch('getCountOfFavorites', filters);

        if(filters.length < 1){
            context.dispatch('setUsers');
            context.commit("setFavorites", []);
            context.commit("setIsEmpty", true);
            return;
        }

        let statusFilters = {};
        for(let i = 1; i <= num; i++){
            statusFilters[i] = filters.includes(i);
        }
        statusFilters['None'] = filters.includes(0);

        let filterStr = '[{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByUser","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateAfterFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateBeforeFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByStatus","value":'+JSON.stringify(statusFilters)+'}]';
        let encodedFilterStr = btoa(filterStr);
        let favorites = [];
        Nova.request()
            .get("/nova-api/favorites?filters="+encodedFilterStr+"&trashed=with&perPage="+context.state.itemsPerPage+"&page="+ page)
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

                if(arrayOfFields.length > 1){
                    context.commit("setIsEmpty", false);
                } else{
                    context.commit("setIsEmpty", true);
                }
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
        });
    },
    setStatusOptions(context){
        Nova.request()
            .get("/nova-api/statuses")
            .then((res) => {
                let options = [];
                let inputs = [];
                const arrayOfFields = parseResponse(res);
                arrayOfFields.forEach((fields) => {
                    options.push({ id: fields.id, name: fields.status });
                    inputs.push(fields.id);
                });
                inputs.push(0);
                context.commit("setInput", inputs);
                context.commit('setStatusOptions', options);
                context.dispatch('setFavorites', {num:options.length, filters: inputs});
                context.dispatch('getCountOfFavorites', context.state.favoriteFilterInputs);
        });
    },
    getCountOfFavorites(context, ...args){
        const [filters] = args;

        if(filters.length < 1){
            context.commit("setTotalFavoriteCount", 0);
            return;
        }

        let statusFilters = {};
        for(let i = 1; i <= context.state.options.length; i++){
            statusFilters[i] = filters.includes(i);
        }
        statusFilters['None'] = filters.includes(0);
        let filterStr = '[{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByUser","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateAfterFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateBeforeFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByStatus","value":'+JSON.stringify(statusFilters)+'}]';
        let encodedFilterStr = btoa(filterStr);
        Nova.request()
        .get("/nova-api/favorites/count?search=&filters="+encodedFilterStr+"&orderBy=&perPage="+context.state.itemsPerPage+"&trashed=with&page="+context.state.page+"&relationshipType=")
        .then((res)=> context.commit("setTotalFavoriteCount", res.data.count));
    }
}

const namespaced = true;

export default {state, mutations, getters, actions, namespaced};