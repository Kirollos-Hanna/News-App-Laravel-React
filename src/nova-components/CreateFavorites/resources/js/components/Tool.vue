<template>
  <div id="content">
    <div class="input-container">
      <h1>Create Favorite</h1>
      <div class="input-container-background">
        <!-- <FormField
          :type="text"
          :placeholder="title"
          :error="errorTitle"
          @changeInput="(...args) => this.changeInput(...args)"
        /> -->
        <TextField
          :isRequired="true"
          :type="textInput"
          :label="title"
          :placeholder="title"
          :error="errorTitle"
          @changeInput="(...args) => this.changeInput(...args)"
        />
        <TextField
          :isRequired="false"
          :type="textInput"
          :label="author"
          :placeholder="author"
          @changeInput="(...args) => this.changeInput(...args)"
        />
        <TextField
          :isRequired="true"
          :type="urlInput"
          :label="source"
          :placeholder="source"
          :error="errorSource"
          :validationError="validationErrorSource"
          @changeInput="(...args) => this.changeInput(...args)"
        />
        <TextField
          :isRequired="true"
          :type="dateInput"
          :label="postDate"
          :placeholder="postDate"
          :error="errorPostDate"
          @changeInput="(...args) => this.changeInput(...args)"
        />
        <DropdownField
          :label="user"
          :error="errorUser"
          @changeInput="(...args) => this.changeInput(...args)"
        />
      </div>
    </div>
    <div class="btn-container">
      <CancelButton />
      <SubmitButton @click.native="submitForm" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import TextField from "./TextField.vue";
import DropdownField from "./DropdownField.vue";
import SubmitButton from "./SubmitButton.vue";
import CancelButton from "./CancelButton.vue";

Vue.use(VueRouter);

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
    };
  },
  methods: {
    submitForm: function (event) {
      this.validateEmptyInputs();

      if (!this.validateUrl(this.inputSource)) {
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
          this.$router.push("/dashboards/main");
        })
        .catch((e) => console.log(e));
    },
    changeInput(...args) {
      const [input, type] = args;
      if (type === this.title) {
        this.inputTitle = input;
        this.errorTitle = false;
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
    validateUrl(urlString) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(urlString);
    },
    validateEmptyInputs() {
      // validate inputs
      this.errorTitle = this.inputTitle === "" ? true : false;
      this.errorSource = this.inputSource === "" ? true : false;
      this.errorUser = this.inputUser === "" ? true : false;
      this.errorPostDate = this.inputPostDate === "" ? true : false;
    },
  },
};
</script>

<style>
</style>
