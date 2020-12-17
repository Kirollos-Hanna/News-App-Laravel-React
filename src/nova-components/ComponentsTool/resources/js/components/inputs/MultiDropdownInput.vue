<template>
  <div class="dropdown-check-list" :class="{ visible: visible }">
    <span class="anchor" @click="changeVisible">Select Status</span>
    <ul class="items">
      <li value=""><input type="checkbox" @click="addOption('')" /> All</li>
      <li v-for="option in options" :value="option.id" :key="option.id">
        <input type="checkbox" @click="addOption(option)" />
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "multi-dropdown-input",
  data() {
    return {
      visible: false,
      inputs: [],
    };
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
    changeVisible: function () {
      this.visible = !this.visible;
    },
    addOption: function (option) {
      let ind = 0;
      if (!option) {
        ind = this.inputs.indexOf(option);
      } else {
        ind = this.inputs.indexOf(option.id);
      }
      if (ind !== -1) {
        this.inputs.splice(ind, 1);
      } else {
        if (option) {
          this.inputs.push(option.id);
        } else {
          this.inputs.push(option);
        }
      }
      this.changeInput(this.inputs, "multi-input");
    },
  },
};
</script>

<style>
@import "./multiDropdownInput.css";
@import "./dropdownInput.css";
@import "./textInput.css";
</style>