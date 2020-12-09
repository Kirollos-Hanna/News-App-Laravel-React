<template>
  <button class="cancel" @click="redirect">Cancel</button>
</template>

<script>
export default {
  name: "CancelButton",
  methods: {
    redirect: function () {
      this.$router.push("/dashboards/main");
    },
  },
};
</script>

<style>
</style>