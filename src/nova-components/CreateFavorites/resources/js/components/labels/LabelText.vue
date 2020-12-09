<template>
  <label :for="label">
    {{ label }}
    <span v-if="isRequired" class="required">*</span></label
  >
</template>

<script>
export default {
  name: "label-text",
  props: {
    label: {
      default: "",
      type: String,
    },
    isRequired: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
@import "./label.css";
</style>