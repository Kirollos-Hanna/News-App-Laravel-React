<template>
  <div id="content">
    <div class="input-container">
      <h1>Create Favorite</h1>
      <div class="input-container-background">
        <TextField
          :label="title"
          :placeholder="title"
          :error="errorTitle"
          v-model="inputTitle"
        />
        <TextField
          :label="source"
          :placeholder="source"
          :error="errorSource"
          v-model="inputSource"
        />
        <DropdownField :label="user" :error="errorUser" v-model="inputUser" />
        <DateInput :label="createdAt" />
      </div>
    </div>
    <div class="btn-container">
      <CancelButton />
      <SubmitButton @click.native="submitForm" />
    </div>
  </div>
</template>

<script>
import TextField from "./TextField.vue";
import DropdownField from "./DropdownField.vue";
import DateInput from "./DateInput.vue";
import SubmitButton from "./SubmitButton.vue";
import CancelButton from "./CancelButton.vue";

export default {
  components: {
    TextField,
    DropdownField,
    DateInput,
    SubmitButton,
    CancelButton,
  },
  data() {
    return {
      title: "Article Title",
      source: "Article Source",
      user: "User",
      createdAt: "Created At",
      inputTitle: "",
      inputSource: "",
      inputUser: "",
      errorTitle: false,
      errorSource: false,
      errorUser: false,
    };
  },
  methods: {
    submitForm: function (event) {
      // validate inputs
      if (this.inputTitle === "") {
        this.errorTitle = true;
      } else {
        this.errorTitle = false;
      }
      if (this.inputSource === "") {
        this.errorSource = true;
      } else {
        this.errorSource = false;
      }
      if (this.inputUser === "") {
        this.errorUser = true;
      } else {
        this.errorUser = false;
      }

      // SHOW ERROR
      if (this.errorTitle || this.errorSource || this.errorUser) {
        return;
      }

      let formData = new FormData();
      formData.append("title", this.inputTitle);
      formData.append("source", this.inputSource);
      formData.append("created_at", new Date().toLocaleString());
      formData.append("user", this.inputUser);
      formData.append("user_trashed", false);
      formData.append("viaResource", "");
      formData.append("viaResourceId", "");
      formData.append("viaRelationship", "");

      Nova.request()
        .post("/nova-api/favorites?editing=true&editMode=create", formData)
        .then((res) => {
          window.location.href = "/nova";
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 400;
  margin-bottom: 7px;
  margin-left: 5px;
}

.input-container {
  margin: 20px;
}

.input-container-background {
  background-color: white;
  border-radius: 10px;
}

.btn-container {
  margin-right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
