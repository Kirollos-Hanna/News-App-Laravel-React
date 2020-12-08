<template>
  <div class="flex border-b border-40">
    <div class="w-1/5 px-8 py-6">
      <label for="created_at" class="inline-block text-80 pt-2 leading-tight">
        Created At

        <!----></label
      >
    </div>
    <div class="py-6 px-8 w-1/2">
      <div class="flex items-center">
        <input
          data-v-7cad3195=""
          type="hidden"
          placeholder="2020-12-07 15:25:21"
          class="w-full form-control form-input form-input-bordered flatpickr-input"
          dusk="created_at"
          name="Created At"
        /><input
          class="w-full form-control form-input form-input-bordered form-control input"
          :placeholder="new Date().toLocaleString()"
          tabindex="0"
          type="text"
          disabled
        />
        <!---->
        <span class="text-80 text-sm ml-2">(Africa/Cairo)</span>
      </div>
      <!---->
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "DateInput",
};
</script>

<style></style>