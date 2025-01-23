async function seedData() {
  try {
    // Створення новин
    const news = await strapi.entityService.create('api::news-item.news-item', {
      data: {
        title: "Відкриття нового офісу",
        slug: "vidkryttya-novogo-ofisu",
        content: "Детальний опис...",
        publishDate: new Date(),
        status: "published"
      }
    });

    // Створення пунктів меню
    const menu = await strapi.entityService.create('api::menu.menu', {
      data: {
        title: "Головна",
        link: "/",
        order: 1,
        isActive: true
      }
    });

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Seeding failed:', error);
  }
}

module.exports = seedData; 