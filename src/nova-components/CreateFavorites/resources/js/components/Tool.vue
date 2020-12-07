<template>
  <div data-testid="content" class="px-view py-view mx-auto">
    <div
      data-v-8affbeb6=""
      class="progress"
      style="
        width: 0%;
        height: 3px;
        opacity: 0;
        background-color: var(--primary);
      "
    ></div>
    <div class="relative">
      <div class="mb-3"></div>
      <form autocomplete="off">
        <div class="mb-8">
          <h1 class="text-90 font-normal text-2xl mb-3">Create Favorite</h1>
          <!---->
          <div class="card">
            <TextInput :label="title" :placeholder="title" />
            <TextInput :label="source" :placeholder="source" />
            <DropdownInput />
            <DateInput />
          </div>
        </div>
        <div class="flex items-center">
          <CancelButton />
          <SubmitButton />
        </div>
      </form>
    </div>
    <!---->
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
    };
  },
};
</script>

<style>
/* Scoped Styles */
</style>
