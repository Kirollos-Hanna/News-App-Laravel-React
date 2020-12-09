<template>
  <div class="field-container">
    <div class="label-spacing">
      <Label :label="label" :isRequired="isRequired" />
    </div>
    <div class="input-spacing">
      <TextInput
        :type="type"
        :error="error"
        :validationError="validationError"
        :sameError="sameError"
        :placeholder="placeholder"
        @changeInputField="(...args) => this.changeInputField(...args)"
        ref="input"
      />
      <p v-if="error && validationError" class="error">
        The {{ label }} field is required and must be a Url.
      </p>
      <p v-else-if="error" class="error">The {{ label }} field is required.</p>
      <p v-else-if="validationError" class="error">
        The {{ label }} field must be a Url.
      </p>
      <p v-else-if="sameError" class="error">
        This {{ label }} is already used.
      </p>
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";
import TextInput from "./TextInput.vue";

export default {
  name: "text-field",
  props: {
    label: {
      default: "",
      type: String,
    },
    placeholder: {
      default: "",
      type: String,
    },
    type: {
      default: "",
      type: String,
    },
    error: {
      default: false,
      type: Boolean,
    },
    validationError: {
      default: false,
      type: Boolean,
    },
    sameError: {
      default: false,
      type: Boolean,
    },
    isRequired: {
      default: false,
      type: Boolean,
    },
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
    changeInputField: function (...args) {
      const [input] = args;
      this.input = input;
      this.$emit("changeInput", input, this.$props.label);
    },
    setInput: function () {
      this.$refs.input.setInput("");
    },
  },
};
</script>

<style scoped>
</style>