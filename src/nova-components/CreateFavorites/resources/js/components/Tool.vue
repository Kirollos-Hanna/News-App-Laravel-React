<template>
  <div id="content" class="px-view py-view mx-auto">
    <div class="progress" style=""></div>
    <div class="relative">
      <div class="mb-3"></div>
      <form
        autocomplete="off"
        action="/nova-api/favorites?editing=true&editMode=create"
        method="post"
      >
        <div class="mb-8">
          <h1 class="text-90 font-normal text-2xl mb-3">Create Favorite</h1>
          <div class="card">
            <TextInput
              :label="title"
              :placeholder="title"
              :error="errorTitle"
              v-model="inputTitle"
            />
            <TextInput
              :label="source"
              :placeholder="source"
              :error="errorSource"
              v-model="inputSource"
            />
            <DropdownInput :error="errorUser" v-model="inputUser" />
            <DateInput />
          </div>
        </div>
        <div class="flex items-center">
          <CancelButton />
          <SubmitButton @click.native="submitForm" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import DropdownInput from "./DropdownInput.vue";
import DateInput from "./DateInput.vue";
import SubmitButton from "./SubmitButton.vue";
import CancelButton from "./CancelButton.vue";

export default {
  components: {
    TextInput,
    DropdownInput,
    DateInput,
    SubmitButton,
    CancelButton,
  },
  data() {
    return {
      title: "Article Title",
      source: "Article Source",
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
/* Scoped Styles */
div.progress {
  width: 0%;
  height: 3px;
  opacity: 0;
  background-color: var(--primary);
}
</style>
