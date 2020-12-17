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
          if (!item["author"]) item["author"] = "";
          if (!item["created_at"]) item["created_at"] = "";
          return item;
        });
    },
};

const getters = {}

const actions = {
    setFavorites(context, filterPosted){
        let filter = filterPosted? filterPosted.target.value: "";
        Nova.request()
            .get("/nova-api/favorites?trashed=with")
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
                        softDeleted: fields.softDeleted,
                    };
                    favorites.push(item);
                });
                context.commit('setFavorites', favorites);
                context.commit('setFilterPosted', filter);
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
        });
    },
    setStatus(context, ...favoriteIDs){
        const [ids] = favoriteIDs;
        let favs = [];
        let itemIds = [];
        ids.forEach(async (id) => {
            await Nova.request()
                .get("/nova-api/favorites?viaResource=statuses&viaResourceId="+id+"&viaRelationship=favorite&relationshipType=belongsToMany&trashed=with")
                .then((res) => {
                    const arrayOfFields = parseResponse(res);

                    arrayOfFields.forEach((fields) => {
                        if(itemIds.includes(fields.id)){
                            return;
                        }

                        const item = {
                            id: fields.id,
                            title: fields.title,
                            source: fields.source,
                            author: fields.author,
                            posting_date: fields.posting_date,
                            created_at: fields.created_at,
                            user: fields.user,
                            softDeleted: fields.softDeleted,
                        };

                        favs.push(item);
                        itemIds.push(fields.id);
                    });
                });
        });

        context.commit('setFavorites', favs);
        context.dispatch('setUsers');
    }
}

const namespaced = true;

export default {state, mutations, getters, actions, namespaced};