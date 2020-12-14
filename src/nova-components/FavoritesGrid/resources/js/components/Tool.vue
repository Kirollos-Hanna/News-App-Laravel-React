<template>
  <div>
    <heading>Favorites Grid</heading>
    <div class="button-container">
      <submit-button @click.native="redirect" />
    </div>
    <favorites-grid />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default {
  methods: {
    redirect: function () {
      this.$router.push("/create-favorites");
    },
  },
};
</script>

<style>
@import "./tool.css";
</style>
