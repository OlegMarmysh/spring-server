const { check } = require('express-validator');

const registerValidator = [
  check('login')
    .isLength({ min: 3 })
    .withMessage('Login length is more than 3 characters'),
  check('password')
    .matches(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,}$/)
    .withMessage('Invalid password'),
  check('firstName')
    .isLength({ min: 3 })
    .withMessage('FirstName length is more than 3 characters'),
  check('lastName')
    .isLength({ min: 3 })
    .withMessage('LastName length is more than 3 characters'),
  check('age')
    .isInt({ min: 1 })
    .withMessage('Invalid age'),
];

module.exports = registerValidator;
