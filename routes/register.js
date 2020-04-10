const express = require('express')
const router = express.Router()
const fsp = require('fs').promises
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const registerValidator = require('../validators/registerValidator')

const saltRounds = 10

router.post('/',
  registerValidator, async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }
      const { login, password } = req.body
      const users = require('../registeredUsers')
      const user = users.find(u => u.login === login)
      if (user) {
        res.status(400).json({ error: 'User with that username exists' })
      } else {
        const hash = await bcrypt.hash(password, saltRounds)
        users.push({
          login: login,
          password: hash
        })
        await fsp.writeFile('registeredUsers.json', JSON.stringify(users))
        res.status(200).json({ status: 'success' })
      }
    } catch (error) {
      console.log(error)
    }
  })

module.exports = router
