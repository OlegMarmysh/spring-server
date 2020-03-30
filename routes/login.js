const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const fsp = require('fs').promises
const bcrypt = require('bcryptjs')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/', async (req, res) => {
  try {
    const login = req.body.login
    const password = req.body.password
    const data = await fsp.readFile('registeredUsers.json')
    const user = JSON.parse(data.toString()).find(u => u.login === login)
    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).send({ status: 'success' })
    } else {
      res.status(403).send({ error: 'Invalid email or password' })
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
