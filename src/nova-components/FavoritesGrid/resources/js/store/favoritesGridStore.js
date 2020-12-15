import {parseResponse} from '../helpers.js';

const state = () => ({
    favorites: [],
    users: [],
});

const mutations = {
    setFavorites(state, favorites){
        state.favorites = favorites;
    },
    setUsers(state, users){
        state.users = users;
    }
};

const getters = {}

const actions = {
    setFavorites(context){
        Nova.request()
            .get("/nova-api/favorites?&trashed=with")
            .then((res) => {
                let favorites = [];
                const arrayOfFields = parseResponse(res);
        
                arrayOfFields.forEach((fields) => {
                    favorites.push({
                        id: fields.id,
                        title: fields.title,
                        source: fields.source,
                        author: fields.author,
                        posting_date: fields.posting_date,
                        created_at: fields.created_at,
                        user: fields.user,
                        softDeleted: fields.softDeleted,
                    });
                });
                context.commit('setFavorites', favorites);
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