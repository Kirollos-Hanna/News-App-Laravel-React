<template>
  <select v-model="input" @change="setInput">
    <option value="" selected="selected">All</option>
    <option value="0">Not Posted</option>
    <option value="1">Posted</option>
  </select>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import { mapActions, mapState } from "vuex";

Vue.use(VueRouter);

export default {
  name: "dropdown-input",
  props: {
    input: {
      default: "",
      type: String,
    },
    setInput: {
      default: () => {
        return;
      },
      type: Function,
    },
  },
  //   methods: {
  //     filterPostedItems: function (filterPosted) {
  //       this.setFilterPosted(filterPosted);
  //       this.setFavorites(filterPosted);
  //     },
  //     ...mapActions("favoritesGridStore", {
  //       setFavorites: "setFavorites",
  //       setUsers: "setUsers",
  //       setFilterPosted: "setFilterPosted",
  //     }),
  //   },
  //   computed: {
  //     ...mapState({
  //       favorites: (state) => state.favoritesGridStore.favorites,
  //       emails: (state) => state.favoritesGridStore.users,
  //       filterPosted: (state) => state.favoritesGridStore.filterPosted,
  //     }),
  //   },
};
</script>
