Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'create-favorites',
      path: '/create-favorites',
      component: require('./components/Tool'),
    },
  ])
})
