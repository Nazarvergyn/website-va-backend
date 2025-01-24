module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    strapi.server.routes([
      {
        method: 'GET',
        path: '/healthz',
        handler: (ctx) => {
          ctx.body = 'OK';
        },
        config: {
          auth: false,
        },
      },
    ]);
  },
}; 