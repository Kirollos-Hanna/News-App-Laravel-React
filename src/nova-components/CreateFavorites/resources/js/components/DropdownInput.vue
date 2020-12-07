<template>
  <div class="flex border-b border-40 remove-bottom-border">
    <div class="w-1/5 px-8 py-6">
      <label for="user" class="inline-block text-80 pt-2 leading-tight">
        User
        <span class="text-danger text-sm">*</span></label
      >
    </div>
    <div class="py-6 px-8 w-1/2">
      <div class="flex items-center">
        <select
          data-testid="users-select"
          dusk="user"
          class="form-control form-select w-full"
        >
          <option value="" selected="selected" disabled="disabled">—</option>
          <option value="6">admin</option>
          <option value="3">kiro</option>
        </select>
      </div>
      <div
        class="v-portal"
        transition="fade-transition"
        style="display: none"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownInput",
  ready: function () {
    this.fetchUsers();
  },
  methods: {
    fetchUsers: function () {
      this.$http.get("/users", function (users) {
        alert(users);
        this.$set("users", users);
      });
    },
  },
};
</script>