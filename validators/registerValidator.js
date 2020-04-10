const { check } = require('express-validator')

const registerValidator = [
  check('login')
    .isEmail()
    .withMessage('Invalid login'),
  check('password')
    .isLength({ min: 3 })
    .withMessage('Password length is more than 3 characters')
]

module.exports = registerValidator
