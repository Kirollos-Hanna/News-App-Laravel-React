<template>
  <div>
    <heading>Favorites Grid</heading>
    <div>
      <button class="create-favorites-button" @click="redirect">
        Create Favorites
      </button>
    </div>
    <grid />
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
