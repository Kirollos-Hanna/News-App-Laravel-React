<template>
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
    <option v-for="option in options" :value="option.id" :key="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "dropdown-input",
  created: function () {
    this.getOptions().then((res) => {
      this.options = res;
    });
  },
  data() {
    return {
      options: [],
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
    getOptions: {
      default: () => {
        return;
      },
      type: Function,
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

<style>
@import "./dropdownInput.css";
@import "./textInput.css";
</style>