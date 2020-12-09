<template>
  <div class="field-container">
    <div class="label-spacing">
      <Label :label="label" :isRequired="isRequired" />
    </div>
    <div class="input-spacing">
      <input
        :type="type"
        :class="{
          'input-error': error || validationError || sameError,
          'input-decoration': true,
        }"
        :placeholder="placeholder"
        v-model="computedInput"
        @input="changeInput(input, placeholder)"
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
import { Label } from "../labels";

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
    changeInput: {
      default: () => {
        return;
      },
      type: Function,
    },
    input: {
      default: "",
      type: String,
    },
  },
  components: {
    Label,
  },
  data: function () {
    return {};
  },
  methods: {
    changeInputField: function (...args) {
      const [input] = args;
      this.input = input;
      this.$emit("changeInput", input, this.$props.label);
    },
  },
  computed: {
    computedInput: {
      get: function () {
        return this.input;
      },
      set: function (newInput) {
        this.input = newInput;
      },
    },
  },
};
</script>

<style scoped>
@import "./textField.css";
</style>