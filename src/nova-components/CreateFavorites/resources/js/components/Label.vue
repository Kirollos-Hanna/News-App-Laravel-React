<template>
  <label :for="label">
    {{ label }}
    <span v-if="isRequired" class="required">*</span></label
  >
</template>

<script>
export default {
  name: "Label",
  props: {
    label: "",
    isRequired: false,
  },
};
</script>

<style scoped>
</style>