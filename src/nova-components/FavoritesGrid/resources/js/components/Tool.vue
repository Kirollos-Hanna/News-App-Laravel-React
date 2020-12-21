<template>
  <div>
    <heading>Favorites Grid</heading>
    <div class="options-spacing">
      <multi-dropdown-input
        :changeInput="changeInput"
        :options="options"
        :defaultInputs="input"
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
        status: 'Status',
        email: 'E-mail',
      }"
      :displayData="favorites"
    />
    <div class="pagination-buttons">
      <submit-button @click.native="paginateLeft" :disabled="this.page <= 1"
        >Prev</submit-button
      >
      <submit-button
        @click.native="paginateRight"
        :disabled="this.page >= this.totalFavoriteCount / this.itemsPerPage"
        >Next</submit-button
      >
    </div>
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
  created: function () {
    this.setStatusOptions();
  },
  destroyed: function () {
    this.setStatusOptions([]);
    this.setPage(1);
    this.setInput([]);
  },
  methods: {
    redirect: function () {
      this.$router.push("/create-favorites");
    },
    paginateLeft: function () {
      this.setPage(this.page - 1);
      this.setFavorites({
        num: this.options.length,
        filters: this.input.slice(0, this.input.length),
        page: this.page,
      });
    },
    paginateRight: function () {
      this.setPage(this.page + 1);
      this.setFavorites({
        num: this.options.length,
        filters: this.input.slice(0, this.input.length),
        page: this.page,
      });
    },
    changeInput: function (...args) {
      const [input] = args;
      this.setInput(input);
      this.setPage(1);
      this.setFavorites({
        num: this.options.length,
        filters: input.slice(0, input.length),
      });
    },
    ...mapActions("favoritesGridStore", {
      setFavorites: "setFavorites",
      setUsers: "setUsers",
      setStatusOptions: "setStatusOptions",
    }),
    ...mapMutations("favoritesGridStore", {
      setPage: "setPage",
      setInput: "setInput",
    }),
  },
  computed: {
    ...mapState({
      favorites: (state) => state.favoritesGridStore.favorites,
      emails: (state) => state.favoritesGridStore.users,
      options: (state) => state.favoritesGridStore.options,
      isGridLoading: (state) => state.favoritesGridStore.isGridLoading,
      page: (state) => state.favoritesGridStore.page,
      input: (state) => state.favoritesGridStore.favoriteFilterInputs,
      totalFavoriteCount: (state) =>
        state.favoritesGridStore.totalFavoriteCount,
      itemsPerPage: (state) => state.favoritesGridStore.itemsPerPage,
    }),
  },
};
</script>

<style>
@import "./tool.css";
</style>
