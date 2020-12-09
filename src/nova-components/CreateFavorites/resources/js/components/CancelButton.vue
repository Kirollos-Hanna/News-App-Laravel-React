<template>
  <button class="cancel" @click="clear">Cancel</button>
</template>

<script>
export default {
  name: "CancelButton",
  methods: {
    clear: function () {
      // this.$router.push("/dashboards/main");
    },
  },
};
</script>

<style>
</style>