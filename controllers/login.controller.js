const db = require('../models')
const User = db.users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const consts = require('../consts')

const expiresIn = '6h'

exports.findOne = async (req, res) => {
  try {
    const { login, password } = req.body
    const user = await User.findOne({ where: { login } })
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ login: user.login }, consts.signature, { expiresIn })
      res.status(200).json({ token })
    } else {
      res.status(400).json({ error: 'Invalid email or password' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving User with login' })
  }
}
