const express = require('express')
const router = express.Router()
const fsp = require('fs').promises
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const consts = require('../consts')

const expiresIn = '6h'

router.post('/', async (req, res) => {
  try {
    const { login, password } = req.body
    const data = await fsp.readFile('registeredUsers.json')
    const user = JSON.parse(data.toString()).find(u => u.login === login)
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ login: user.login }, consts.signature, { expiresIn })
      res.status(200).json({ token })
    } else {
      res.status(401).json({ error: 'Invalid email or password' })
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
