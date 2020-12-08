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
.field-container {
  display: flex;
  height: 75px;
}

.input-spacing {
  margin: 5px;
  padding: 10px;
  margin-right: 20%;
  width: 75%;
}

.label-spacing {
  margin: 5px;
  margin-left: 25px;
  padding: 10px;
  padding-top: 20px;
  width: 25%;
}

.input-decoration {
  border: 1px solid #6d6b81;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: white;
}

.arrow-decoration {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;
}

.input-decoration:focus {
  border: 3px solid #3c3b47;
  border-radius: 10px;
  outline: none;
}

.error {
  padding: 5px;
  color: red;
  font-style: italic;
  font-size: 12px;
}

.input-error {
  border-color: red;
}
</style>