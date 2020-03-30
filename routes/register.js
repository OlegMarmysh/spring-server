const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const fsp = require('fs').promises
const bcrypt = require('bcryptjs')

const saltRounds = 10

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/', async (req, res) => {
  try {
    const login = req.body.login
    const password = req.body.password
    const users = require('../registeredUsers')
    const hash = await bcrypt.hash(password, saltRounds)
    users.push({
      login: login,
      password: hash
    })
    await fsp.writeFile('registeredUsers.json', JSON.stringify(users))
    res.status(200).send({ status: 'success' })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
