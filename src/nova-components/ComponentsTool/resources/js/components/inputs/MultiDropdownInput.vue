<template>
  <select
    :class="{
      'input-decoration': true,
      'multi-select-decoration': true,
    }"
    v-model="input"
    @change="changeInput(input, 'multi-input')"
    multiple
  >
    <option value="" selected="selected">—</option>
    <option v-for="option in options" :value="option.id" :key="option.id">
      <input type="checkbox" />
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "multi-dropdown-input",
  data() {
    return { expanded: false };
  },
  props: {
    options: {
      default: [],
      type: Array,
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
  methods: {
    showCheckboxes: function () {
      var checkboxes = document.getElementById("checkboxes");
      if (!this.expanded) {
        checkboxes.style.display = "block";
        this.expanded = true;
      } else {
        checkboxes.style.display = "none";
        this.expanded = false;
      }
    },
  },
};
</script>

<style>
@import "./multiDropdownInput.css";
@import "./dropdownInput.css";
@import "./textInput.css";
</style>