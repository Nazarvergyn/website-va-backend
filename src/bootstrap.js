'use strict';

const seeder = require('./seeds');
const checkSeedFiles = require('./seeds/check-paths');
const createInitialData = require('./bootstrap/seed-data');

module.exports = async ({ strapi }) => {
  console.log('Starting bootstrap process...');
  console.log('Current NODE_ENV:', process.env.NODE_ENV);
  
  // Перевіряємо наявність seed файлів
  checkSeedFiles();
  
  try {
    // Знаходимо публічну роль
    console.log('Finding public role...');
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    console.log('Public role found:', publicRole.id);

    // Оновлюємо дозволи для публічної ролі
    const permissions = {
      'api::news-item.news-item': ['find', 'findOne'],
      'api::page.page': ['find', 'findOne'],
      'api::menu.menu': ['find', 'findOne'],
    };

    console.log('Setting up permissions...');
    
    // Встановлюємо дозволи
    for (const [controller, actions] of Object.entries(permissions)) {
      for (const action of actions) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: `${controller}.${action}`,
            role: publicRole.id,
          },
        });
      }
    }

    console.log('Permissions set successfully');

    // Запускаємо сідер тільки в режимі розробки
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode detected, running seeds...');
      await seeder.seedAll(strapi);
    } else {
      console.log('Not in development mode, skipping seeds');
    }

    // Створюємо початкові дані
    console.log('Creating initial data...');
    await createInitialData(strapi);
    console.log('Initial data created successfully');

    console.log('Bootstrap process completed successfully');
  } catch (error) {
    console.error('Bootstrap process failed:', error);
  }
}; 