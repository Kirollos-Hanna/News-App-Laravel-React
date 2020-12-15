import Grid from "./components/Grid.vue";
import favoritesGridStore from "./store/favoritesGridStore.js";

Nova.booting((Vue, router, store) => {
  store.registerModule(
    'favoritesGridStore', favoritesGridStore
  );

  Vue.component('grid', Grid);

  router.addRoutes([
    {
      name: 'favorites-grid',
      path: '/favorites-grid',
      component: require('./components/Tool'),
    },
  ])
})
