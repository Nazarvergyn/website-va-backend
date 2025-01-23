const newsSeeder = require('./news');
const menuSeeder = require('./menu');

module.exports = {
  async seedAll(strapi) {
    try {
      console.log('Starting seeding process...');
      console.log('News seeder loaded:', !!newsSeeder);
      console.log('Menu seeder loaded:', !!menuSeeder);
      
      // Очищаємо існуючі дані
      console.log('Clearing existing data...');
      await this.clearData(strapi);
      
      // Наповнюємо новими даними
      console.log('Seeding news...');
      await newsSeeder.seedNews(strapi);
      
      console.log('Seeding menu...');
      await menuSeeder.seedMenu(strapi);
      
      console.log('All data seeded successfully');
    } catch (error) {
      console.error('Seeding process failed:', error.message);
      console.error('Error stack:', error.stack);
      throw error; // Прокидуємо помилку далі
    }
  },

  async clearData(strapi) {
    try {
      // Видаляємо всі існуючі дані
      await strapi.db.query('api::news-item.news-item').deleteMany({});
      await strapi.db.query('api::menu.menu').deleteMany({});
      
      console.log('Existing data cleared successfully');
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error; // Прокидуємо помилку далі
    }
  }
}; 