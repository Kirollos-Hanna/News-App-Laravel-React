<template>
  <div class="dropdown-check-list" :class="{ visible: visible }">
    <span class="anchor" @click="changeVisible">Select Status</span>
    <ul class="items">
      <li>
        <input type="checkbox" v-model="selectAll" />
        All
      </li>
      <li>
        <input
          type="checkbox"
          v-model="defaultInputs"
          :value="0"
          @click="addOption({ id: 0, name: 'None' })"
        />
        No Status
      </li>
      <li v-for="option in options" :key="option.id">
        <input
          type="checkbox"
          v-model="defaultInputs"
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
    };
  },
  props: {
    options: {
      default: [],
      type: Array,
    },
    defaultInputs: {
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
        ind = this.defaultInputs.indexOf(option);
      } else {
        ind = this.defaultInputs.indexOf(option.id);
      }
      if (ind !== -1) {
        this.defaultInputs.splice(ind, 1);
      } else {
        if (option) {
          this.defaultInputs.push(option.id);
        } else {
          this.defaultInputs.push(option);
        }
      }
      this.changeInput(this.defaultInputs, "multi-input");
    },
  },
  computed: {
    selectAll: {
      get: function () {
        return this.options
          ? this.defaultInputs.length == this.options.length + 1
          : false;
      },
      set: function (value) {
        let selected = [];
        let arrayInputs = [];

        if (value) {
          this.options.forEach(function (option) {
            selected.push(option.id);
          });
          selected.push(0);

          for (let i = 0; i < this.options.length; i++) {
            arrayInputs.push(this.options[i].id);
          }
          arrayInputs.push(0);
        }
        this.defaultInputs = selected;

        this.defaultInputs = arrayInputs.map((elm) => elm);
        this.changeInput(this.defaultInputs, "multi-input");
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