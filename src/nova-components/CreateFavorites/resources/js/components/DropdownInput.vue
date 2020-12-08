<template>
  <div class="flex border-b border-40 remove-bottom-border">
    <div class="w-1/5 px-8 py-6">
      <label for="user" class="inline-block text-80 pt-2 leading-tight">
        User <span class="text-danger text-sm">*</span></label
      >
    </div>
    <div class="py-6 px-8 w-1/2">
      <div class="flex items-center">
        <select
          data-testid="users-select"
          dusk="user"
          class="form-control form-select w-full"
          :class="{ 'border-danger': error }"
          v-bind:value="input"
          v-on:input="$emit('input', $event.target.value)"
        >
          <option value="" selected="selected" disabled="disabled">—</option>
          <option v-for="user in users" :value="user.id" :key="user.name">
            {{ user.name }}
          </option>
        </select>
      </div>
      <div
        class="v-portal"
        transition="fade-transition"
        style="display: none"
      ></div>

      <div v-if="error" class="help-text error-text mt-2 text-danger">
        The User field is required.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownInput",
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
    error: Boolean,
  },
};
</script>