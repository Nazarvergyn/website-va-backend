'use strict';

module.exports = {
  async index(ctx) {
    ctx.body = {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  },
}; 