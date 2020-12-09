<template>
  <p class="error">{{ text }}</p>
</template>

<script>
export default {
  name: "error-label",
  props: {
    text: {
      default: "",
      type: String,
    },
  },
};
</script>

<style>
@import "./errorLabel.css";
</style>