const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { getRegisteredUsers } = require('../repository')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/', async (req, res) => {
  const users = await getRegisteredUsers()
  const login = req.body.login
  const user = users.find(u => u.login === login)
  if (user) {
    res.send({ resultCode: 0 })
  } else {
    res.send({ error: 'Invalid email or password' })
  }
})

module.exports = router
