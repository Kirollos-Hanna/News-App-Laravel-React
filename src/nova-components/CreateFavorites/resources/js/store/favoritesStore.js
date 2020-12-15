
import { parseResponse } from "../helpers.js";

const state = () => ({
    users: [],

    // Input types
    textInput: "text",
    urlInput: "url",
    dateInput: "date",
    title: "Article Title",
    source: "Article Source",
    postDate: "Post Date",
    author: "Author",
    user: "User",
    posted: "Posted",

    // Input values
    inputTitle: "",
    inputSource: "",
    inputUser: "",
    inputPostDate: "",
    inputAuthor: "",
    inputPosted: false,

    // Errors
    errorTitle: false,
    errorSource: false,
    errorUser: false,
    errorPostDate: false,
    validationErrorSource: false,
    errorSameTitle: false,
});

const mutations = {
    setUser(state, users){
        state.users = users;
    },
    setInputTitle(state, title){
        state.inputTitle = title;
    },
    setInputSource(state, source){
        state.inputSource = source;
    },
    setInputUser(state, user){
        state.inputUser = user;
    },
    setInputPostDate(state, postDate){
        state.inputPostDate = postDate;
    },
    setInputAuthor(state, author){
        state.inputAuthor = author;
    },
    setInputPosted(state, posted){
        state.inputPosted = posted;
    },
    setErrorTitle(state, errorTitle){
        state.errorTitle = errorTitle;
    },
    setErrorSource(state, errorSource){
        state.errorSource = errorSource;
    },
    setErrorUser(state, errorUser){
        state.errorUser = errorUser;
    },
    setErrorPostDate(state, errorPostDate){
        state.errorPostDate = errorPostDate;
    },
    setValidationErrorSource(state, validationErrorSource){
        state.validationErrorSource = validationErrorSource;
    },
    setErrorSameTitle(state, errorSameTitle){
        state.errorSameTitle = errorSameTitle;
    },
    clearInputsAndErrors(state){
      state.inputTitle = "";
      state.inputSource = "";
      state.inputUser = "";
      state.inputPostDate = "";
      state.inputAuthor = "";
      state.errorSameTitle = false;
      state.validationErrorSource = false;
      state.errorTitle = false;
      state.errorSource = false;
      state.errorUser = false;
      state.errorPostDate = false;
    }
};

const getters = {}

const actions = {
    setUser(context){
        Nova.request()
        .get("/nova-api/users")
        .then((res) => {
            let users = [];
            const arrayOfFields = parseResponse(res);

            arrayOfFields.forEach((fields) => {
            users.push({ name: fields.name, id: fields.id });
            });

            context.commit('setUser', users);
        });
    }
}

export default {state, mutations, getters, actions};