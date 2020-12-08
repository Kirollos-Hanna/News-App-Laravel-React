<template>
  <input
    :type="type"
    class="input-decoration"
    :class="{ 'input-error': error }"
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
    placeholder: "",
    type: "",
    isRequired: false,
  },
  components: {
    Label,
  },
};
</script>

<style scoped>
</style>