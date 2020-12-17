<template>
  <div class="dropdown-check-list" :class="{ visible: visible }">
    <span class="anchor" @click="changeVisible">Select Status</span>
    <ul class="items">
      <li value="">
        <input type="checkbox" v-model="selectAll" />
        All
      </li>
      <li v-for="option in options" :key="option.id">
        <input
          type="checkbox"
          v-model="selected"
          :value="option.id"
          @click="addOption(option)"
        />
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
      selected: [],
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
  computed: {
    selectAll: {
      get: function () {
        return this.options
          ? this.selected.length == this.options.length
          : false;
      },
      set: function (value) {
        let selected = [];
        let arrayInputs = [];

        if (value) {
          this.options.forEach(function (option) {
            selected.push(option.id);
          });

          for (let i = 0; i < this.options.length; i++) {
            arrayInputs.push(this.options[i].id);
          }
        }
        this.inputs = arrayInputs.map((elm) => elm);
        this.changeInput(this.inputs, "multi-input");
        this.selected = selected;
      },
    },
  },
};
</script>

<style>
@import "./multiDropdownInput.css";
@import "./dropdownInput.css";
@import "./textInput.css";
</style>