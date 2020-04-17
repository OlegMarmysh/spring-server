const db = require('../models')
const User = db.users
const bcrypt = require('bcryptjs')

const saltRounds = 10

exports.create = async (req, res) => {
  try {
    const { login, password, firstName, lastName, age } = req.body
    const hash = await bcrypt.hash(password, saltRounds)
    const user = {
      login,
      password: hash,
      firstName,
      lastName,
      age
    }
    await User.create(user)
    res.status(200).json({ status: 'success' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Some error occurred while creating the User' })
  }
}

exports.findOne = async (req, res, next) => {
  try {
    const { login } = req.body
    const user = await User.findOne({ where: { login } })
    if (user) {
      return res.status(400).json({ error: 'User with that username exists' })
    }
    next()
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving User with login' })
  }
}
