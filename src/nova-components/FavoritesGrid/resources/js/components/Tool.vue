<template>
  <div>
    <heading>Favorites Grid</heading>
    <div class="options-spacing">
      <multi-dropdown-input
        :input="filterPosted"
        :setInput="setFavorites"
        :changeInput="changeInput"
        :options="options"
      />
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
        email: 'E-mail',
      }"
      :displayData="favorites"
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
    this.setFavorites(this.filterPosted);
  },
  methods: {
    redirect: function () {
      this.$router.push("/create-favorites");
    },
    changeInput: function (...args) {
      const [input, type] = args;
      this.setFilterPosted(input);
      if (input[0]) {
        this.setStatus(input);
      } else {
        this.setFavorites();
      }
    },
    ...mapActions("favoritesGridStore", {
      setFavorites: "setFavorites",
      setUsers: "setUsers",
      setStatus: "setStatus",
    }),
    ...mapMutations("favoritesGridStore", {
      setFilterPosted: "setFilterPosted",
      formatDisplayedData: "formatDisplayedData",
    }),
  },
  computed: {
    ...mapState({
      favorites: (state) => state.favoritesGridStore.favorites,
      emails: (state) => state.favoritesGridStore.users,
      filterPosted: (state) => state.favoritesGridStore.filterPosted,
      options: (state) => state.favoritesGridStore.options,
    }),
  },
};
</script>

<style>
@import "./tool.css";
</style>
