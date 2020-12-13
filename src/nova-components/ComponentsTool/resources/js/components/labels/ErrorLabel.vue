<template>
  <p v-if="errorType === 'same'" class="error">{{ sameErrorText }}</p>
  <p v-else-if="errorType === 'emptyAndInvalid'" class="error">
    {{ emptyAndInvalidErrorText }}
  </p>
  <p v-else-if="errorType === 'empty'" class="error">{{ emptyErrorText }}</p>
  <p v-else-if="errorType === 'invalid'" class="error">
    {{ invalidErrorText }}
  </p>
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
  },
  computed: {
    emptyErrorText: function () {
      return "The " + this.label + " field is required.";
    },
    invalidErrorText: function () {
      return "The " + this.label + " field must be a Url.";
    },
    emptyAndInvalidErrorText: function () {
      return "The " + this.label + " field is required and must be a Url.";
    },
    sameErrorText: function () {
      return "This " + this.label + " is already used.";
    },
  },
};
</script>

<style>
@import "./errorLabel.css";
</style>