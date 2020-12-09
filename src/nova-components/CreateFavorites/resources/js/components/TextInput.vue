<template>
  <input
    :type="type"
    :class="{
      'input-error': error || validationError || sameError,
      'input-decoration': true,
    }"
    :placeholder="placeholder"
    v-model="input"
    @input="changeInput($data.input, placeholder)"
    :required="isRequired"
  />
</template>

<script>
import Label from "./Label.vue";

export default {
  name: "text-input",
  data: function () {
    return {
      input: "",
    };
  },
  props: {
    placeholder: {
      default: "",
      type: String,
    },
    type: {
      default: "",
      type: String,
    },
    isRequired: {
      default: false,
      type: Boolean,
    },
    error: {
      default: false,
      type: Boolean,
    },
    validationError: {
      default: false,
      type: Boolean,
    },
    sameError: {
      default: false,
      type: Boolean,
    },
    changeInput: {
      default: () => {
        return;
      },
      type: Function,
    },
  },
  components: {
    Label,
  },
  methods: {
    setInput: function (input) {
      this.input = input;
    },
  },
};
</script>

<style scoped>
</style>