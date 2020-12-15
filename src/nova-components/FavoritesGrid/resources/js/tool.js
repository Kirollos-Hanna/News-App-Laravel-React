import favoritesGridStore from "./store/favoritesGridStore.js";

Nova.booting((Vue, router, store) => {
  favoritesGridStore['namespaced'] = true;
  store.registerModule(
    'favoritesGridStore', favoritesGridStore
  );

  router.addRoutes([
    {
      name: 'favorites-grid',
      path: '/favorites-grid',
      component: require('./components/Tool'),
    },
  ])
})
