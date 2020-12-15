import {parseResponse} from '../helpers.js';

const state = () => ({
    favorites: [],
    users: [],
    filterPosted: "",
});

const mutations = {
    setFavorites(state, favorites){
        state.favorites = favorites;
    },
    setUsers(state, users){
        state.users = users;
    },
    setFilterPosted(state, filterPosted){
        state.filterPosted = filterPosted;
    }
};

const getters = {}

const actions = {
    setFavorites(context, filterPosted){
        let filter = filterPosted? filterPosted.target.value: "";
        const str =  '[{"class":"App\\\\Nova\\\\Filters\\\\FilterFavoriteByUser","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateAfterFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\DateBeforeFilter","value":""},{"class":"App\\\\Nova\\\\Filters\\\\FilterPosted","value":"'+filter+'"}]';
        const hashedStr = btoa(str);
        Nova.request()
            .get("/nova-api/favorites?filters="+hashedStr+"&trashed=with")
            .then((res) => {
                let favorites = [];
                const arrayOfFields = parseResponse(res);

                arrayOfFields.forEach((fields) => {
                    const item = {
                        id: fields.id,
                        title: fields.title,
                        source: fields.source,
                        author: fields.author,
                        posting_date: fields.posting_date,
                        created_at: fields.created_at,
                        user: fields.user,
                        posted: fields.posted,
                        softDeleted: fields.softDeleted,
                    };
                    favorites.push(item);
                });
                context.commit('setFavorites', favorites);
                context.commit('setFilterPosted', filter);
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
        });
    }
}

export default {state, mutations, getters, actions};