const express = require('express')
const router = express.Router()
const users = require('../controllers/login.controller')

router.post('/', users.findOne)

module.exports = router
