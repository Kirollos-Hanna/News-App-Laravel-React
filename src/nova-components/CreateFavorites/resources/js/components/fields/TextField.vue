<template>
  <div class="field-container">
    <div class="label-spacing">
      <label-text :label="label" :isRequired="isRequired" />
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

      <error-label
        v-if="error && validationError"
        :text="emptyAndValidationErrorText"
      />
      <error-label v-else-if="error" :text="errorText" />
      <error-label v-else-if="validationError" :text="validationText" />
      <error-label v-else-if="sameError" :text="sameErrorText" />
    </div>
  </div>
</template>

<script>
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
    LabelText,
    ErrorLabel,
  },
  data: function () {
    return {};
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
    validationText: function () {
      return "The " + this.label + " field must be a Url.";
    },
    errorText: function () {
      return "The " + this.label + " field is required.";
    },
    emptyAndValidationErrorText: function () {
      return "The " + this.label + " field is required and must be a Url.";
    },
    sameErrorText: function () {
      return "This " + this.label + " is already used.";
    },
  },
};
</script>

<style>
@import "./textField.css";
</style>