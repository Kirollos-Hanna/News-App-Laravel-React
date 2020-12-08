<template>
  <div class="field-container">
    <div class="label-spacing">
      <Label :label="label" :isRequired="true" />
    </div>
    <div class="input-spacing">
      <input
        type="text"
        class="input-decoration"
        :class="{ 'input-error': error }"
        :placeholder="placeholder"
        v-bind:value="input"
        v-on:input="$emit('input', $event.target.value)"
      />
      <p v-if="error" class="error">The {{ label }} field is required.</p>
    </div>
  </div>
</template>

<script>
import Label from "./Label.vue";

export default {
  name: "TextField",
  props: {
    label: String,
    placeholder: String,
    input: String,
    error: Boolean,
  },
  components: {
    Label,
  },
};
</script>

<style scoped>
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