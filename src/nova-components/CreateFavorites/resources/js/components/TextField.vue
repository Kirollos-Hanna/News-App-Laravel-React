<template>
  <div class="field-container">
    <div class="label-spacing">
      <Label :label="label" :isRequired="true" />
    </div>
    <div class="input-spacing">
      <input
        type="text"
        class="input-decoration"
        :class="{ 'input-error': error }"
        :placeholder="placeholder"
        v-bind:value="input"
        v-on:input="$emit('input', $event.target.value)"
      />
      <p v-if="error" class="error">The {{ label }} field is required.</p>
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";

export default {
  name: "TextField",
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