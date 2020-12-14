import Grid from "./components/Grid.vue";

Nova.booting((Vue, router, store) => {

  Vue.component('grid', Grid);

  router.addRoutes([
    {
      name: 'favorites-grid',
      path: '/favorites-grid',
      component: require('./components/Tool'),
    },
  ])
})
