<template>
  <div class="field-container">
    <div class="label-spacing">
      <Label :label="label" :isRequired="false" />
    </div>
    <div class="input-spacing">
      <input
        class="input-decoration disabled-input"
        :placeholder="new Date().toLocaleString()"
        tabindex="0"
        type="text"
        disabled
      />
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";

export default {
  name: "DateField",
  props: {
    label: String,
    placeholder: String,
    input: String,
    error: Boolean,
  },
  components: {
    Label,
  },
};
</script>

<style scoped>
</style>


