<template>
  <div>
    <heading>Favorites Grid</heading>
    <div class="options-spacing">
      <multi-dropdown-input :changeInput="changeInput" :options="options" />
      <submit-button @click.native="redirect"> Create Favorites </submit-button>
    </div>
    <grid
      :columns="{
        id: 'ID',
        title: 'Article Title',
        source: 'Article Source',
        author: 'Author',
        postDate: 'Posting Date',
        createdAt: 'Created At',
        user: 'User',
        status: 'Status',
        email: 'E-mail',
      }"
      :displayData="favorites"
      :isLoading="isGridLoading"
    />
    <!-- TODO: Call nova-api/favorites?page=2,3,4...etc to get the rest of the requested data ON BACK/NEXT BUTTON CLICK -->
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
import { mapActions, mapMutations, mapState } from "vuex";

Vue.use(VueRouter);

export default {
  mounted: function () {
    this.setStatusOptions();
  },
  methods: {
    redirect: function () {
      this.$router.push("/create-favorites");
    },
    changeInput: function (...args) {
      const [input, type] = args;
      if (input === "None") {
        this.setFavorites({
          num: this.options.length,
          filters: [],
          noStatusOnly: true,
        });
      } else {
        this.setFavorites({
          num: this.options.length,
          filters: input.slice(0, input.length),
        });
      }
    },
    ...mapActions("favoritesGridStore", {
      setFavorites: "setFavorites",
      setUsers: "setUsers",
      setStatusOptions: "setStatusOptions",
    }),
  },
  computed: {
    ...mapState({
      favorites: (state) => state.favoritesGridStore.favorites,
      emails: (state) => state.favoritesGridStore.users,
      options: (state) => state.favoritesGridStore.options,
      isGridLoading: (state) => state.favoritesGridStore.isGridLoading,
    }),
  },
};
</script>

<style>
@import "./tool.css";
</style>
