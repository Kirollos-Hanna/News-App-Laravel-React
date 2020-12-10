Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'test-tool',
      path: '/test-tool',
      component: require('./components/Tool'),
    },
  ])
})
