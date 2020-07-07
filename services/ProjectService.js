const db = require('../database/models');

class ProjectService {
  async getSpringProject() {
    try {
      return await db.SpringProjects.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async getSpringAtticProject() {
    try {
      return await db.SpringAtticProjects.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}

const projectService = new ProjectService();

module.exports = projectService;
