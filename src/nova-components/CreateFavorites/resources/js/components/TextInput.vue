<template>
  <input
    :type="type"
    :class="{ 'input-error': error, 'input-decoration': true }"
    :placeholder="placeholder"
    v-model="input"
    @input="$emit('changeInputField', $data.input)"
    :required="isRequired"
  />
</template>

<script>
import Label from "./Label.vue";

export default {
  name: "TextInput",
  data: function () {
    return {
      input: "",
    };
  },
  props: {
    placeholder: {
      default: "",
      type: String,
    },
    type: {
      default: "",
      type: String,
    },
    isRequired: {
      default: false,
      type: Boolean,
    },
  },
  components: {
    Label,
  },
};
</script>

<style scoped>
</style>