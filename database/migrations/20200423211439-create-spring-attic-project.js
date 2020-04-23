'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SpringAtticProjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    return queryInterface.bulkInsert('SpringAtticProjects',
      [
        {
          img: 'https://spring.io/images/projects/spring-web-flo-c47fc8750aa924ea5751f1cabf2d9cdb.svg?v=2',
          title: 'Spring IO Platform',
          body: 'Provides a cohesive, versioned platform for building modern applications. It is a modular, enterprise-grade distribution that delivers a curated set of dependencies.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
          title: 'Spring Flex',
          body: 'A project to make it easier to build Spring-powered Rich Internet Applications using Adobe Flex as the front-end client.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
          title: 'Spring integration Groovy DSL',
          body: 'A Groovy based DSL for developing Spring Integration applications.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg',
          title: 'Spring integration Scala DSL',
          body: 'A Scala based DSL for developing Spring Integration applications.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SpringAtticProjects')
  }
}
