<template>
  <div class="field-container">
    <div class="label-spacing">
      <Label :label="label" :isRequired="true" />
    </div>
    <div class="input-spacing">
      <select
        :class="{
          'input-error': error,
          'input-decoration': true,
          'arrow-decoration': true,
        }"
        v-model="input"
        @change="$emit('changeInput', $data.input, label)"
      >
        <option value="" selected="selected" disabled="disabled">—</option>
        <option v-for="user in users" :value="user.id" :key="user.name">
          {{ user.name }}
        </option>
      </select>

      <div v-if="error" class="error">The {{ label }} field is required.</div>
    </div>
  </div>
</template>

<script>
import { parseUserResponse } from "../helpers.js";
import Label from "./Label.vue";

export default {
  name: "DropdownField",
  beforeCreate: function () {
    Nova.request()
      .get("/nova-api/users")
      .then((res) => {
        this.users = parseUserResponse(res);
      })
      .catch((e) => console.log(e));
  },
  data() {
    return {
      users: [],
      input: "",
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
  },
  components: {
    Label,
  },
};
</script>

<style>
</style>