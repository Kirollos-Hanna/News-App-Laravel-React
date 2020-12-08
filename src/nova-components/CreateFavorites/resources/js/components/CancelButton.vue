<template>
  <a href="#" class="cancel" @click="redirect"> Cancel </a>
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
.cancel {
  text-decoration: none;
  color: gray;
  font-weight: bold;
  margin-right: 20px;
}
</style>