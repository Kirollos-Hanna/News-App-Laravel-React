import createFavorites from "./store/favoritesStore.js";

Nova.booting((Vue, router, store) => {
  store.registerModule(
    'createFavorites', createFavorites
  );
  
  router.addRoutes([
    {
      name: 'create-favorites',
      path: '/create-favorites',
      component: require('./components/Tool'),
    },
  ])
})
