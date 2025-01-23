module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/healthcheck',
      handler: 'healthcheck.index',
      config: {
        auth: false,
      },
    },
  ],
}; 