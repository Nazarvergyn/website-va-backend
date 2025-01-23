module.exports = {
  async run({ strapi }) {
    try {
      // Створюємо тестову новину
      await strapi.entityService.create('api::news-item.news-item', {
        data: {
          title: 'Тестова новина',
          slug: 'testova-novina',
          content: 'Це тестовий контент для новини...',
          summary: 'Короткий опис новини',
          category: 'general',
          status: 'published',
          publishDate: new Date(),
          publishedAt: new Date() // Важливо для draftAndPublish
        }
      });
    } catch (error) {
      console.error('Помилка при створенні тестових даних:', error);
    }
  }
}; 