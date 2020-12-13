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
              v-if="errorTitle"
              :label="title"
              :errorType="emptyError"
            />
            <error-label
              v-else-if="errorSameTitle"
              :label="title"
              :errorType="sameError"
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
              v-if="errorSource && validationErrorSource"
              :label="source"
              :errorType="emptyAndInvalidError"
            />
            <error-label
              v-else-if="errorSource"
              :label="source"
              :errorType="emptyError"
            />
            <error-label
              v-else-if="validationErrorSource"
              :label="source"
              :errorType="validationError"
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
            <error-label
              v-if="errorPostDate"
              :label="postDate"
              :errorType="emptyError"
            />
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

            <error-label
              v-if="errorUser"
              :label="user"
              :errorType="emptyError"
            />
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

export default {
  data() {
    return {
      // Input types
      textInput: "text",
      urlInput: "url",
      dateInput: "date",
      title: "Article Title",
      source: "Article Source",
      postDate: "Post Date",
      author: "Author",
      user: "User",
      createdAt: "Created At",

      // Values
      // valUser: "",
      users: [],

      // Input values
      inputTitle: "",
      inputSource: "",
      inputUser: "",
      inputPostDate: "",
      inputAuthor: "",

      // Errors
      errorTitle: false,
      errorSource: false,
      errorUser: false,
      errorPostDate: false,
      validationErrorSource: false,
      errorSameTitle: false,

      // Error Types
      emptyError: "empty",
      sameError: "same",
      validationError: "invalid",
      emptyAndInvalidError: "emptyAndInvalid",
    };
  },
  methods: {
    submitForm: function (event) {
      this.errorTitle = validateEmptyInput(this.inputTitle);
      this.errorSource = validateEmptyInput(this.inputSource);
      this.errorUser = validateEmptyInput(this.inputUser);
      this.errorPostDate = validateEmptyInput(this.inputPostDate);

      if (!validateUrl(this.inputSource)) {
        this.validationErrorSource = true;
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
            this.errorSameTitle = true;
          }
        });
    },
    changeInput: function (...args) {
      const [input, type] = args;
      if (type === this.title) {
        this.inputTitle = input;
        this.errorTitle = false;
        this.errorSameTitle = false;
      } else if (type === this.source) {
        this.inputSource = input;
        this.errorSource = false;
        this.validationErrorSource = false;
      } else if (type === this.user) {
        this.inputUser = input;
        this.errorUser = false;
      } else if (type === this.postDate) {
        this.inputPostDate = input;
        this.errorPostDate = false;
      } else if (type === this.author) {
        this.inputAuthor = input;
      }
    },
    clearInputs: function () {
      this.inputTitle = "";
      this.inputSource = "";
      this.inputUser = "";
      this.inputPostDate = "";
      this.inputAuthor = "";
      this.errorSameTitle = false;
      this.validationErrorSource = false;
      this.errorTitle = false;
      this.errorSource = false;
      this.errorUser = false;
      this.errorPostDate = false;
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
