import Grid from "./components/Grid.vue";
import DropdownInput from "./components/DropdownInput.vue"
import favoritesGridStore from "./store/favoritesGridStore.js";

Nova.booting((Vue, router, store) => {
  store.registerModule(
    'favoritesGridStore', favoritesGridStore
  );

  Vue.component('grid', Grid);
  Vue.component('dropdown-input', DropdownInput);

  router.addRoutes([
    {
      name: 'favorites-grid',
      path: '/favorites-grid',
      component: require('./components/Tool'),
    },
  ])
})
