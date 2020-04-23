const db = require('../database/models')

class ProjectService {
  async getSpringProject () {
    try {
      return await db.SpringProject.findAll()
    } catch (error) {
      console.log(error)
    }
  }

  async getSpringAtticProject () {
    try {
      return await db.SpringAtticProject.findAll()
    } catch (error) {
      console.log(error)
    }
  }
}

const projectService = new ProjectService()

module.exports = projectService
