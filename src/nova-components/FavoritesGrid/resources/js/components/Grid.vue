<template>
  <table class="grid">
    <thead class="grid-head">
      <tr>
        <td>Id</td>
        <td>Article Title</td>
        <td>Article Source</td>
        <td>Author</td>
        <td>Post Date</td>
        <td>Created At</td>
        <td>User</td>
        <td>E-mail</td>
      </tr>
    </thead>
    <tbody class="grid-body">
      <tr v-for="favorite in favorites" v-bind:key="favorite.id">
        <td>{{ favorite.id }}</td>
        <td>{{ favorite.title }}</td>
        <td>{{ favorite.source }}</td>
        <td c v-if="favorite.author">{{ favorite.author }}</td>
        <td class="no-val-error" v-else>Author is not found</td>
        <td>{{ favorite.posting_date }}</td>
        <td v-if="favorite.created_at">{{ favorite.created_at }}</td>
        <td class="no-val-error" v-else>Created At is not found</td>
        <td v-if="favorite.user">{{ favorite.user }}</td>
        <td>{{ getEmail(favorite.user) }}</td>
      </tr>
    </tbody>
  </table>
  <!-- TODO: Call nova-api/favorites?page=2,3,4...etc to get the rest of the requested data ON BACK/NEXT BUTTON CLICK -->
</template>

<script>
import { parseResponse } from "../helpers.js";

export default {
  name: "grid",
  data() {
    return {
      favorites: [],
      emails: [],
    };
  },
  beforeCreate: function () {
    Nova.request()
      .get("/nova-api/favorites")
      .then((res) => {
        const arrayOfFields = parseResponse(res);

        arrayOfFields.forEach((fields) => {
          this.favorites.push({
            id: fields.id,
            title: fields.title,
            source: fields.source,
            author: fields.author,
            posting_date: fields.posting_date,
            created_at: fields.created_at,
            user: fields.user,
          });
        });
      });
    Nova.request()
      .get("/nova-api/users")
      .then((res) => {
        const arrayOfFields = parseResponse(res);
        arrayOfFields.forEach((fields) => {
          this.emails.push({ name: fields.name, email: fields.email });
        });
      });
  },
  methods: {
    getEmail: function (name) {
      let elm = this.emails.find((elm) => elm.name === name);
      return elm.email;
    },
  },
};
</script>

<style>
@import "./grid.css";
</style>
