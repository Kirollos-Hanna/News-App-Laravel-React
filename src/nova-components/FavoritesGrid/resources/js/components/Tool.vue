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

Vue.use(VueRouter);

export default {
  data() {
    return {
      // Columns
      id: "Id",
      title: "Article Title",
      source: "Article Source",
      author: "Author",
      postDate: "Post Date",
      createdAt: "Created At",
      user: "User",
      email: "E-mail",

      // Grid Data
      favoritesData: [],
      userData: [],
    };
  },
  created: function () {
    this.getFavorites().then((res) => {
      this.favoritesData = res;
    });

    this.getUsers().then((res) => {
      this.userData = res;
      this.formatDisplayedData();
    });
  },
  methods: {
    redirect: function () {
      this.$router.push("/create-favorites");
    },
    getEmail: function (name) {
      let elm = this.userData.find((elm) => elm.name === name);
      return elm ? elm.email : null;
    },
    getFavorites: async function () {
      // Get Favorites info
      return Nova.request()
        .get("/nova-api/favorites?&trashed=with")
        .then((res) => {
          let favoritesArray = [];
          const arrayOfFields = parseResponse(res);

          arrayOfFields.forEach((fields) => {
            favoritesArray.push({
              id: fields.id,
              title: fields.title,
              source: fields.source,
              author: fields.author,
              posting_date: fields.posting_date,
              created_at: fields.created_at,
              user: fields.user,
              softDeleted: fields.softDeleted,
            });
          });
          return favoritesArray;
        });
    },
    getUsers: async function () {
      return Nova.request()
        .get("/nova-api/users")
        .then((res) => {
          let users = [];
          const arrayOfFields = parseResponse(res);
          arrayOfFields.forEach((fields) => {
            users.push({ name: fields.name, email: fields.email });
          });
          return users;
        });
    },
    formatDisplayedData: function () {
      this.favoritesData.map((item) => {
        item["email"] = this.getEmail(item.user);
        if (!item["author"]) item["author"] = "Author is not found";
        if (!item["created_at"]) item["created_at"] = "Created At is not found";
        return item;
      });
    },
  },
};
</script>

<style>
@import "./tool.css";
</style>
