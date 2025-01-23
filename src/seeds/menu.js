module.exports = {
  async seedMenu(strapi) {
    try {
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
        },
        {
          title: "Контакти",
          link: "/contacts",
          order: 4,
          isActive: true
        }
      ];

      for (const item of menuItems) {
        await strapi.entityService.create('api::menu.menu', {
          data: item
        });
      }

      console.log('Menu seeded successfully');
    } catch (error) {
      console.error('Error seeding menu:', error);
    }
  }
}; 