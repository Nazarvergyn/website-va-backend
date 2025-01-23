'use strict';

module.exports = {
  routes: require('./routes/menu'),
  controllers: require('./controllers/menu'),
  services: require('./services/menu'),
  contentTypes: {
    menu: require('./content-types/menu/schema.json')
  }
}; 