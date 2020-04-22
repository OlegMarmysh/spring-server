const express = require('express')
const router = express.Router()
const userService = require('../database/services/userService')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const consts = require('../consts')

const expiresIn = '6h'

router.post('/', async (req, res) => {
  try {
    const { login, password } = req.body
    const user = await userService.getUser(login)
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ login: user.login }, consts.signature, { expiresIn })
      res.status(200).json({ token })
    } else {
      res.status(400).json({ error: 'Invalid email or password' })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error retrieving User with login' })
  }
})

module.exports = router
