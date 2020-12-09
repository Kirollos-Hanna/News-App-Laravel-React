<template>
  <label :for="label">
    {{ label }}
    <span v-if="isRequired" class="required">*</span></label
  >
</template>

<script>
export default {
  name: "label",
  props: {
    label: {
      default: {
        default: "",
        type: String,
      },
      type: {
        default: false,
        type: Boolean,
      },
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