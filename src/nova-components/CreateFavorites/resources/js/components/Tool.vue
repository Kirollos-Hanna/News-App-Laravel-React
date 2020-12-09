<template>
  <div class="content">
    <div class="input-container">
      <h1>Create Favorite</h1>
      <div class="input-container-background">
        <TextField
          :isRequired="true"
          :type="textInput"
          :label="title"
          :placeholder="title"
          :error="errorTitle"
          :sameError="errorSameTitle"
          :changeInput="changeInput"
          ref="titleField"
        />
        <TextField
          :isRequired="false"
          :type="textInput"
          :label="author"
          :placeholder="author"
          :changeInput="changeInput"
          ref="authorField"
        />
        <TextField
          :isRequired="true"
          :type="urlInput"
          :label="source"
          :placeholder="source"
          :error="errorSource"
          :validationError="validationErrorSource"
          :changeInput="changeInput"
          ref="sourceField"
        />
        <TextField
          :isRequired="true"
          :type="dateInput"
          :label="postDate"
          :placeholder="postDate"
          :error="errorPostDate"
          :changeInput="changeInput"
          ref="postDateField"
        />
        <DropdownField
          :label="user"
          :error="errorUser"
          :changeInput="changeInput"
          ref="userField"
        />
      </div>
    </div>
    <div class="btn-container">
      <CancelButton @click.native="clearInputs" />
      <SubmitButton @click.native="submitForm" />
    </div>
  </div>
</template>

<script>
import { DropdownField, TextField } from "./fields";
import { CancelButton, SubmitButton } from "./buttons";
import { validateUrl, validateEmptyInput } from "../helpers.js";

export default {
  components: {
    TextField,
    DropdownField,
    SubmitButton,
    CancelButton,
  },
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
      this.removeInputValues();
      this.inputTitle = "";
      this.inputSource = "";
      this.inputUser = "";
      this.inputPostDate = "";
      this.inputAuthor = "";
    },
    removeInputValues: function () {
      this.$refs.userField.setInput("");
      this.$refs.titleField.setInput("");
      this.$refs.sourceField.setInput("");
      this.$refs.postDateField.setInput("");
      this.$refs.authorField.setInput("");
    },
  },
};
</script>

<style>
@import "./tool.css";
</style>
