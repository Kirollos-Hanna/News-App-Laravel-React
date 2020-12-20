<template>
  <button
    type="button"
    :class="{ 'submit-button': true, disabled: disabled }"
    :disabled="disabled"
  >
    <span> <slot /> </span>
  </button>
</template>

<script>
export default {
  name: "submit-button",
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style>
@import "./submitButton.css";
</style>