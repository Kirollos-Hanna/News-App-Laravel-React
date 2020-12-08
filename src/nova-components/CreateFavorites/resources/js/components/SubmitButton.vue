<template>
  <button
    type="button"
    class="btn btn-default btn-primary inline-flex items-center relative"
    dusk="create-button"
  >
    <span class=""> Create Favorite </span>
    <!---->
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  methods: {
    createFavorite: function (event) {
      Nova.request()
        .post("/nova-api/favorites?editing=true&editMode=create", {
          title: "asdfbalahasdfasdf",
          source: "asdfasdfdgc",
          user_id: 1,
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
  },
};

// API endpoint to create a new favorite item
// /nova-api/favorites?editing=true&editMode=create
</script>

<style></style>