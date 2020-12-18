<template>
  <div v-if="isLoading" class="loading">
    <p>Loading...</p>
  </div>
  <table v-else class="grid">
    <thead class="grid-head">
      <tr>
        <td v-for="column in columns" v-bind:key="column">{{ column }}</td>
      </tr>
    </thead>
    <tbody class="grid-body">
      <tr
        v-for="item in displayData"
        v-bind:key="item.id"
        :class="{ 'soft-deleted': item.softDeleted }"
      >
        <td
          :class="{
            'no-val-error': !data,
          }"
          v-for="data in filterItem(item)"
          v-bind:key="data"
        >
          {{ data ? data : "Not Found" }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "grid",
  props: {
    columns: {
      default: {},
      type: Object,
    },
    displayData: {
      default: [],
      type: Array,
    },
    isLoading: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      data: [],
      extraData: [],
    };
  },
  methods: {
    filterItem: function (item) {
      let newItem = { ...item };
      delete newItem.softDeleted;
      return newItem;
    },
  },
};
</script>

<style>
@import "./grid.css";
</style>
