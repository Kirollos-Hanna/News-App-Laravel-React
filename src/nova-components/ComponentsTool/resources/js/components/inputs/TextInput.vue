<template>
  <input
    :type="type"
    :class="{
      'input-error': error || validationError || sameError,
      'input-decoration': true,
    }"
    :placeholder="placeholder"
    v-model="computedInput"
    @input="changeInput(input, placeholder)"
  />
</template>

<script>
export default {
  name: "text-input",
  props: {
    label: {
      default: "",
      type: String,
    },
    placeholder: {
      default: "",
      type: String,
    },
    type: {
      default: "",
      type: String,
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
    input: {
      default: "",
      type: String,
    },
  },
  computed: {
    computedInput: {
      get: function () {
        return this.input;
      },
      set: function (newInput) {
        this.input = newInput;
      },
    },
  },
};
</script>

<style>
@import "./textInput.css";
</style>