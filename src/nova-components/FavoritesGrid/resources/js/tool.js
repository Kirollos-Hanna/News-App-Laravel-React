import favoritesGridStore from "./store/favoritesGridStore.js";

Nova.booting((Vue, router, store) => {
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
