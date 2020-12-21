<template>
  <input
    :type="type"
    :dusk="placeholder"
    :class="{
      'input-error': error || validationError || sameError,
      'input-decoration': true,
    }"
    :placeholder="placeholder"
    v-model="input"
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
};
</script>

<style>
@import "./textInput.css";
</style>