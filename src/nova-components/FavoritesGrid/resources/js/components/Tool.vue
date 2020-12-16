<template>
  <div>
    <heading>Favorites Grid</heading>
    <div>
      <dropdown-input :input="filterPosted" :setInput="setFavorites" />
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
    this.setFavorites(this.filterPosted);
    this.setUsers();
  },
  methods: {
    redirect: function () {
      this.$router.push("/create-favorites");
    },
    filterPostedItems: function (filterPosted) {
      this.setFilterPosted(filterPosted);
      this.setFavorites(filterPosted);
    },
    ...mapActions("favoritesGridStore", {
      setFavorites: "setFavorites",
      setUsers: "setUsers",
      setFilterPosted: "setFilterPosted",
    }),
  },
  computed: {
    ...mapState({
      favorites: (state) => state.favoritesGridStore.favorites,
      emails: (state) => state.favoritesGridStore.users,
      filterPosted: (state) => state.favoritesGridStore.filterPosted,
    }),
  },
};
</script>

<style>
@import "./tool.css";
</style>
