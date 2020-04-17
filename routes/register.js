const express = require('express')
const router = express.Router()
const { validationResult } = require('express-validator')
const registerValidator = require('../validators/registerValidator')
const users = require('../controllers/register.controller')

router.post('/',
  registerValidator, (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    next()
  },
  users.findOne, users.create
)

module.exports = router
