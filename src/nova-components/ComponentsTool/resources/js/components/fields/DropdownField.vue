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
        v-model="computedInput"
        @change="changeInput(input, label)"
      >
        <option value="" selected="selected" disabled="disabled">—</option>
        <option v-for="user in users" :value="user.id" :key="user.name">
          {{ user.name }}
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
  beforeCreate: function () {
    Nova.request()
      .get("/nova-api/users")
      .then((res) => {
        const arrayOfFields = parseResponse(res);

        arrayOfFields.forEach((fields) => {
          this.users.push({ name: fields.name, id: fields.id });
        });
      });
  },
  data() {
    return {
      users: [],
    };
  },
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
    errorText: function () {
      return "The " + this.label + " field is required.";
    },
  },
};
</script>

<style>
@import "./dropdownField.css";
</style>