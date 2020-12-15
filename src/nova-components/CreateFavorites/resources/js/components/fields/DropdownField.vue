<template>
  <div class="field-container">
    <div class="label-spacing">
      <label-text :label="label" :isRequired="true" />
    </div>
    <div class="input-spacing">
      <select
        :class="{
          'input-error': error,
          'input-decoration': true,
          'arrow-decoration': true,
        }"
        v-model="input"
        @change="changeInput(input, label)"
      >
        <option value="" selected="selected" disabled="disabled">—</option>
        <option v-for="option in options" :value="option.id" :key="option.id">
          {{ option.name }}
        </option>
      </select>

      <error-label v-if="error" :text="errorText" />
    </div>
  </div>
</template>

<script>
import { parseResponse } from "../../helpers.js";

export default {
  name: "dropdown-field",
  props: {
    label: {
      default: "",
      type: String,
    },
    error: {
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
    options: {
      default: [],
      type: Array,
    },
  },
  computed: {
    errorText: function () {
      return "The " + this.label + " field is required.";
    },
  },
};
</script>

<style>
@import "./dropdownField.css";
</style>