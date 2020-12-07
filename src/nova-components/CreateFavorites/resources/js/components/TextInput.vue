<template>
  <div class="card">
    <div class="flex border-b border-40">
      <div class="w-1/5 px-8 py-6">
        <label for="title" class="inline-block text-80 pt-2 leading-tight">
          {{ label }}
          <span class="text-danger text-sm">*</span></label
        >
      </div>
      <div class="py-6 px-8 w-1/2">
        <input
          dusk="title"
          list="title-list"
          type="text"
          :placeholder="placeholder"
          class="w-full form-control form-input form-input-bordered"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: "",
    placeholder: "",
  },
};
</script>

<style scoped>
</style>>