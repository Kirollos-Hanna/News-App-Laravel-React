<template>
  <div class="field-container">
    <div class="label-spacing">
      <Label :label="label" :isRequired="true" />
    </div>
    <div class="input-spacing">
      <select
        id="users-select"
        class="input-decoration arrow-decoration"
        :class="{ 'input-error': error }"
        v-bind:value="input"
        v-on:input="$emit('input', $event.target.value)"
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
import Label from "./Label.vue";

export default {
  name: "DropdownField",
  beforeCreate: function () {
    Nova.request()
      .get("http://localhost:8000/nova-api/users")
      .then((res) => {
        let resources = res.data.resources;
        resources.map((user) => {
          this.users.push({ name: user.title, id: user.id.value });
        });
      })
      .catch((e) => console.log(e));
  },
  data() {
    return {
      users: [],
    };
  },
  props: {
    input: String,
    label: String,
    error: Boolean,
  },
  components: {
    Label,
  },
};
</script>

<style>
</style>