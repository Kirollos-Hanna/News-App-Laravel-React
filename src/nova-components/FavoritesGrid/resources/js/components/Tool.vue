<template>
  <div>
    <heading>Favorites Grid</heading>
    <div>
      <button class="create-favorites-button" @click="redirect">
        Create Favorites
      </button>
    </div>
    <grid :favorites="favorites" :emails="emails" />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import { mapActions, mapState } from "vuex";

Vue.use(VueRouter);

export default {
  mounted: function () {
    this.setFavorites();
    this.setUsers();
  },
  methods: {
    redirect: function () {
      this.$router.push("/create-favorites");
    },
    ...mapActions({
      setFavorites: "favoritesGridStore/setFavorites",
      setUsers: "favoritesGridStore/setUsers",
    }),
  },
  computed: {
    ...mapState({
      favorites: (state) => state.favoritesGridStore.favorites,
      emails: (state) => state.favoritesGridStore.users,
    }),
  },
};
</script>

<style>
@import "./tool.css";
</style>
