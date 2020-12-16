<template>
  <p class="error">{{ errorText }}</p>
</template>

<script>
export default {
  name: "error-label",
  props: {
    label: {
      default: "",
      type: String,
    },
    errorType: {
      default: "",
      type: String,
    },
    emptyError: {
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
  },
  computed: {
    errorText: function () {
      if (this.sameError) {
        return "This " + this.label + " is already used.";
      } else if (this.emptyError && this.validationError) {
        return "The " + this.label + " field is required and must be a Url.";
      } else if (this.emptyError) {
        return "The " + this.label + " field is required.";
      } else if (this.validationError) {
        return "The " + this.label + " field must be a Url.";
      }
    },
  },
};
</script>

<style>
@import "./errorLabel.css";
</style>