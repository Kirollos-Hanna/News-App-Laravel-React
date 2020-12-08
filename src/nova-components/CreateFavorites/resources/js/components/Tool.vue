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

<style>
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

.field-container {
  display: flex;
  height: 75px;
}

.input-spacing {
  margin: 5px;
  padding: 10px;
  margin-right: 20%;
  width: 75%;
}

.label-spacing {
  margin: 5px;
  margin-left: 25px;
  padding: 10px;
  padding-top: 20px;
  width: 25%;
}

.input-decoration {
  border: 1px solid #6d6b81;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: white;
}

.arrow-decoration {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;
}

.input-decoration:focus {
  border: 3px solid #3c3b47;
  border-radius: 10px;
  outline: none;
}

.error {
  padding: 5px;
  color: red;
  font-style: italic;
  font-size: 12px;
}

.input-error {
  border-color: red;
}
</style>
