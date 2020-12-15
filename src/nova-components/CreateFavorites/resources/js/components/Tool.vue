<template>
  <div>
    <div class="input-container">
      <h1>Create Favorite</h1>
      <div class="input-container-background">
        <text-field
          :isRequired="true"
          :type="textInput"
          :label="title"
          :placeholder="title"
          :error="errorTitle"
          :sameError="errorSameTitle"
          :changeInput="changeInput"
          :input="inputTitle"
        />
        <text-field
          :isRequired="false"
          :type="textInput"
          :label="author"
          :placeholder="author"
          :changeInput="changeInput"
          :input="inputAuthor"
        />
        <text-field
          :isRequired="true"
          :type="urlInput"
          :label="source"
          :placeholder="source"
          :error="errorSource"
          :validationError="validationErrorSource"
          :changeInput="changeInput"
          :input="inputSource"
        />
        <text-field
          :isRequired="true"
          :type="dateInput"
          :label="postDate"
          :placeholder="postDate"
          :error="errorPostDate"
          :changeInput="changeInput"
          :input="inputPostDate"
        />
        <div class="field-container">
          <div class="label-spacing">
            <label-text label="Posted" :isRequired="false" />
          </div>
          <div class="input-spacing">
            <input
              type="checkbox"
              class="checkbox-input input-decoration"
              placeholder="Posted"
              v-model="checked"
              @change="changeInput(checked, 'Posted')"
            />
          </div>
        </div>
        <dropdown-field
          :label="user"
          :error="errorUser"
          :changeInput="changeInput"
          :input="inputUser"
          :options="users"
        />
      </div>
    </div>
    <div class="btn-container">
      <cancel-button @click.native="clearInputs" />
      <submit-button @click.native="submitForm" />
    </div>
  </div>
</template>

<script>
import { validateUrl, validateEmptyInput } from "../helpers.js";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  mounted: function () {
    this.setUser();
  },
  computed: {
    ...mapState({
      // Input types
      textInput: (state) => state.createFavorites.textInput,
      urlInput: (state) => state.createFavorites.urlInput,
      dateInput: (state) => state.createFavorites.dateInput,
      title: (state) => state.createFavorites.title,
      source: (state) => state.createFavorites.source,
      postDate: (state) => state.createFavorites.postDate,
      author: (state) => state.createFavorites.author,
      user: (state) => state.createFavorites.user,
      posted: (state) => state.createFavorites.posted,

      // Input values
      inputTitle: (state) => state.createFavorites.inputTitle,
      inputSource: (state) => state.createFavorites.inputSource,
      inputUser: (state) => state.createFavorites.inputUser,
      inputPostDate: (state) => state.createFavorites.inputPostDate,
      inputAuthor: (state) => state.createFavorites.inputAuthor,
      inputPosted: (state) => state.createFavorites.inputPosted,

      // Dropdown options value
      users: (state) => state.createFavorites.users,

      // Errors
      errorTitle: (state) => state.createFavorites.errorTitle,
      errorSource: (state) => state.createFavorites.errorSource,
      errorUser: (state) => state.createFavorites.errorUser,
      errorPostDate: (state) => state.createFavorites.errorPostDate,
      validationErrorSource: (state) =>
        state.createFavorites.validationErrorSource,
      errorSameTitle: (state) => state.createFavorites.errorSameTitle,
    }),
  },
  methods: {
    submitForm: function (event) {
      this.setErrorTitle(validateEmptyInput(this.inputTitle));
      this.setErrorSource(validateEmptyInput(this.inputSource));
      this.setErrorUser(validateEmptyInput(this.inputUser));
      this.setErrorPostDate(validateEmptyInput(this.inputPostDate));

      if (!validateUrl(this.inputSource)) {
        this.setValidationErrorSource(true);
        return;
      }

      // Show Error
      if (this.errorTitle || this.errorSource || this.errorUser) {
        return;
      }

      let formData = new FormData();
      formData.append("title", this.inputTitle);
      formData.append("source", this.inputSource);
      formData.append("posting_date", this.inputPostDate);
      formData.append("author", this.inputAuthor);
      formData.append("posted", this.inputPosted ? 1 : 0);
      formData.append("created_at", new Date().toLocaleString());
      formData.append("user", this.inputUser);
      formData.append("user_trashed", false);
      formData.append("viaResource", "");
      formData.append("viaResourceId", "");
      formData.append("viaRelationship", "");

      Nova.request()
        .post("/nova-api/favorites?editing=true&editMode=create", formData)
        .then((res) => {
          this.clearInputs();
          this.$toasted.show("Favorite created successfully!", {
            type: "success",
          });
        })
        .catch((e) => {
          if (
            e.response.data.errors.title[0] ===
            "The Article Title has already been taken."
          ) {
            this.setErrorSameTitle(true);
          }
        });
    },
    changeInput: function (...args) {
      const [input, type] = args;
      if (type === this.title) {
        this.setInputTitle(input);
        this.setErrorTitle(false);
        this.setErrorSameTitle(false);
      } else if (type === this.source) {
        this.setInputSource(input);
        this.setErrorSource(false);
        this.setValidationErrorSource(false);
      } else if (type === this.user) {
        this.setInputUser(input);
        this.setErrorUser(false);
      } else if (type === this.postDate) {
        this.setInputPostDate(input);
        this.setErrorPostDate(false);
      } else if (type === this.author) {
        this.setInputAuthor(input);
      } else if (type === this.posted) {
        this.setInputPosted(input);
      }
    },
    clearInputs: function () {
      this.clearInputsAndErrors();
    },
    ...mapMutations({
      setInputTitle: "createFavorites/setInputTitle",
      setInputSource: "createFavorites/setInputSource",
      setInputUser: "createFavorites/setInputUser",
      setInputPostDate: "createFavorites/setInputPostDate",
      setInputAuthor: "createFavorites/setInputAuthor",
      setInputPosted: "createFavorites/setInputPosted",
      setErrorTitle: "createFavorites/setErrorTitle",
      setErrorSource: "createFavorites/setErrorSource",
      setErrorUser: "createFavorites/setErrorUser",
      setErrorPostDate: "createFavorites/setErrorPostDate",
      setValidationErrorSource: "createFavorites/setValidationErrorSource",
      setErrorSameTitle: "createFavorites/setErrorSameTitle",
      clearInputsAndErrors: "createFavorites/clearInputsAndErrors",
    }),
    ...mapActions({
      setUser: "createFavorites/setUser",
    }),
  },
};
</script>

<style>
@import "./tool.css";
</style>
