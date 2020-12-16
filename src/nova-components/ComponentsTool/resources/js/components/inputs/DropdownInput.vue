<template>
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
};
</script>

<style>
@import "./dropdownInput.css";
@import "./textInput.css";
</style>