const db = require('../models')

class UserService {
  static async addUser (user) {
    try {
      return await db.User.create(user)
    } catch (error) {
      console.log(error)
    }
  }

  static async getUser (login) {
    try {
      return await db.User.findOne({ where: { login } })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = UserService
