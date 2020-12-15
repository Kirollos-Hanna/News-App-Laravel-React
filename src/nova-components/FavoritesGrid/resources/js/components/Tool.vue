<template>
  <div>
    <heading>Favorites Grid</heading>
    <div class="button-container">
      <submit-button @click.native="redirect" />
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
