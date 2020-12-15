<template>
  <div>
    <div class="input-container">
      <h1>Create Favorite</h1>
      <div class="input-container-background">
        <div class="field-container">
          <div class="label-spacing">
            <label-text :label="title" :isRequired="true" />
          </div>
          <div class="input-spacing">
            <text-input
              :type="textInput"
              :error="errorTitle"
              :sameError="errorSameTitle"
              :placeholder="title"
              :changeInput="changeInput"
              :input="inputTitle"
            />
            <error-label
              :label="title"
              :emptyError="errorTitle"
              :sameError="errorSameTitle"
            />
          </div>
        </div>

        <div class="field-container">
          <div class="label-spacing">
            <label-text :label="author" :isRequired="false" />
          </div>
          <div class="input-spacing">
            <text-input
              :type="textInput"
              :placeholder="author"
              :changeInput="changeInput"
              :input="inputAuthor"
            />
          </div>
        </div>

        <div class="field-container">
          <div class="label-spacing">
            <label-text :label="source" :isRequired="true" />
          </div>
          <div class="input-spacing">
            <text-input
              :type="urlInput"
              :error="errorSource"
              :validationError="validationErrorSource"
              :placeholder="source"
              :changeInput="changeInput"
              :input="inputSource"
            />
            <error-label
              :label="source"
              :errorType="emptyAndInvalidError"
              :emptyError="errorSource"
              :validationError="validationErrorSource"
            />
          </div>
        </div>

        <div class="field-container">
          <div class="label-spacing">
            <label-text :label="source" :isRequired="true" />
          </div>
          <div class="input-spacing">
            <text-input
              :type="dateInput"
              :error="errorPostDate"
              :placeholder="postDate"
              :changeInput="changeInput"
              :input="inputPostDate"
            />
            <error-label :label="postDate" :emptyError="errorPostDate" />
          </div>
        </div>

        <div class="field-container">
          <div class="label-spacing">
            <label-text :label="user" :isRequired="true" />
          </div>
          <div class="input-spacing">
            <dropdown-input
              :label="user"
              :input="inputUser"
              :changeInput="changeInput"
              :getOptions="getUsers"
              :error="errorUser"
            />

            <error-label :label="user" :emptyError="errorUser" />
          </div>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <cancel-button @click.native="clearInputs" />
      <submit-button @click.native="submitForm" />
    </div>
  </div>
</template>

<script>
import {
  validateUrl,
  validateEmptyInput,
  parseResponse,
} from "../../../../ComponentsTool/resources/js/helpers.js";
import { mapState } from "vuex";

export default {
  beforeCreate: function () {
    this.$store.dispatch("setUser");
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
      createdAt: (state) => state.createFavorites.createdAt,

      // Input values
      inputTitle: (state) => state.createFavorites.inputTitle,
      inputSource: (state) => state.createFavorites.inputSource,
      inputUser: (state) => state.createFavorites.inputUser,
      inputPostDate: (state) => state.createFavorites.inputPostDate,
      inputAuthor: (state) => state.createFavorites.inputAuthor,

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
      this.$store.commit("setErrorTitle", validateEmptyInput(this.inputTitle));
      this.$store.commit(
        "setErrorSource",
        validateEmptyInput(this.inputSource)
      );
      this.$store.commit("setErrorUser", validateEmptyInput(this.inputUser));
      this.$store.commit(
        "setErrorPostDate",
        validateEmptyInput(this.inputPostDate)
      );

      if (!validateUrl(this.inputSource)) {
        this.$store.commit("setValidationErrorSource", true);
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
            this.$store.commit("setErrorSameTitle", true);
          }
        });
    },
    changeInput: function (...args) {
      const [input, type] = args;
      if (type === this.title) {
        this.$store.commit("setInputTitle", input);
        this.$store.commit("setErrorTitle", false);
        this.$store.commit("setErrorSameTitle", false);
      } else if (type === this.source) {
        this.$store.commit("setInputSource", input);
        this.$store.commit("setErrorSource", false);
        this.$store.commit("setValidationErrorSource", false);
      } else if (type === this.user) {
        this.$store.commit("setInputUser", input);
        this.$store.commit("setErrorUser", false);
      } else if (type === this.postDate) {
        this.$store.commit("setInputPostDate", input);
        this.$store.commit("setErrorPostDate", false);
      } else if (type === this.author) {
        this.$store.commit("setInputAuthor", input);
      }
    },
    clearInputs: function () {
      this.$store.commit("clearInputsAndErrors");
    },
    getUsers: async function () {
      return Nova.request()
        .get("/nova-api/users")
        .then((res) => {
          const arrayOfFields = parseResponse(res);
          let users = [];

          arrayOfFields.forEach((fields) => {
            users.push({ name: fields.name, id: fields.id });
          });
          return users;
        });
    },
  },
};
</script>

<style>
@import "./tool.css";
</style>
