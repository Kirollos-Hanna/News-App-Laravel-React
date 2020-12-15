<template>
  <div>
    <heading>Favorites Grid</heading>
    <div>
      <select v-model="filterPosted" @change="setFavorites">
        <option value="" selected="selected">All</option>
        <option value="0">Not Posted</option>
        <option value="1">Posted</option>
      </select>
      <button class="create-favorites-button" @click="redirect">
        Create Favorites
      </button>
    </div>
    <grid
      :columns="{
        id,
        title,
        source,
        author,
        postDate,
        createdAt,
        user,
        email,
      }"
      :displayData="favoritesData"
    />
    <!-- TODO: Call nova-api/favorites?page=2,3,4...etc to get the rest of the requested data ON BACK/NEXT BUTTON CLICK -->
    <grid :favorites="favorites" :emails="emails" />
    <!-- TODO add favorites and emails prop to grid? -->
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import {
  validateUrl,
  validateEmptyInput,
  parseResponse,
} from "../../../../ComponentsTool/resources/js/helpers.js";
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
    ...mapActions({
      setFavorites: "favoritesGridStore/setFavorites",
      setUsers: "favoritesGridStore/setUsers",
      setFilterPosted: "favoritesGridStore/setFilterPosted",
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
