<template>
  <div class="field-container">
    <div class="label-spacing">
      <Label :label="label" :isRequired="isRequired" />
    </div>
    <div class="input-spacing">
      <TextInput
        class="input-decoration"
        :type="type"
        :class="{ 'input-error': error || validationError }"
        :placeholder="placeholder"
        @changeInputField="(...args) => this.changeInputField(...args)"
      />
      <p v-if="error" class="error">The {{ label }} field is required.</p>
      <p v-if="validationError" class="error">
        The {{ label }} field must be a Url.
      </p>
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";
import TextInput from "./TextInput.vue";

export default {
  name: "TextField",
  props: {
    label: "",
    placeholder: "",
    type: "",
    error: false,
    validationError: false,
    isRequired: false,
  },
  components: {
    Label,
    TextInput,
  },
  data: function () {
    return {
      input: "",
    };
  },
  methods: {
    changeInputField(...args) {
      const [input] = args;
      this.input = input;
      this.$emit("changeInput", input, this.$props.label);
    },
  },
};
</script>

<style scoped>
</style>