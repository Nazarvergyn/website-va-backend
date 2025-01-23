async function createData(strapi) {
  try {
    console.log('Checking existing collections...');
    
    // Перевіряємо чи існують колекції
    const newsCollection = await strapi.db.query('api::news-item.news-item').findMany({});
    const menuCollection = await strapi.db.query('api::menu.menu').findMany({});
    
    console.log('Existing news items:', newsCollection.length);
    console.log('Existing menu items:', menuCollection.length);

    // Створюємо новини тільки якщо їх немає
    if (newsCollection.length === 0) {
      console.log('Creating news items...');
      const newsItems = [
        {
          title: "Відкриття нового офісу компанії",
          slug: "vidkryttya-novogo-ofisu",
          content: "Раді повідомити про відкриття нашого нового офісу в центрі міста...",
          summary: "Компанія розширюється та відкриває новий офіс",
          category: "business",
          status: "published",
          publishDate: new Date(),
        },
        {
          title: "Запуск нового проекту",
          slug: "zapusk-novogo-proektu",
          content: "Сьогодні ми розпочали роботу над інноваційним проектом, який змінить підхід до розробки веб-додатків...",
          summary: "Старт роботи над новим проектом компанії",
          category: "technology",
          status: "published",
          publishDate: new Date(),
        }
      ];

      for (const item of newsItems) {
        try {
          const created = await strapi.entityService.create('api::news-item.news-item', {
            data: item
          });
          console.log(`Created news: ${created.title}`);
        } catch (error) {
          console.error(`Failed to create news "${item.title}":`, error.message);
        }
      }
    }

    // Створюємо меню тільки якщо його немає
    if (menuCollection.length === 0) {
      console.log('Creating menu items...');
      const menuItems = [
        {
          title: "Головна",
          link: "/",
          order: 1,
          isActive: true
        },
        {
          title: "Про нас",
          link: "/about",
          order: 2,
          isActive: true
        },
        {
          title: "Новини",
          link: "/news",
          order: 3,
          isActive: true
        }
      ];

      for (const item of menuItems) {
        try {
          const created = await strapi.entityService.create('api::menu.menu', {
            data: item
          });
          console.log(`Created menu item: ${created.title}`);
        } catch (error) {
          console.error(`Failed to create menu item "${item.title}":`, error.message);
        }
      }
    }

    console.log('Initial data creation completed');
  } catch (error) {
    console.error('Data creation failed:', error.message);
    console.error('Error stack:', error.stack);
  }
}

module.exports = createData; 