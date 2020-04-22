const db = require('../models')

class UserService {
  async addUser (user) {
    try {
      return await db.User.create(user)
    } catch (error) {
      console.log(error)
    }
  }

  async getUser (login) {
    try {
      return await db.User.findOne({ where: { login } })
    } catch (error) {
      console.log(error)
    }
  }
}

const userService = new UserService()

module.exports = userService
