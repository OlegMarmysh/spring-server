module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SpringProjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      img: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.TEXT,
      },
    });
    return queryInterface.bulkInsert('SpringProjects',
      [
        {
          img: 'https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg',
          title: 'Spring boot',
          body: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible',
        },
        {
          img: 'https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2',
          title: 'Spring framework',
          body: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.',
        },
        {
          img: 'https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg',
          title: 'Spring data',
          body: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
        },
        {
          img: 'https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg',
          title: 'Spring cloud',
          body: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
        },
      ],
      {});
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('SpringProjects'),
};
