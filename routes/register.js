const express = require('express');

const router = express.Router();
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const registerValidator = require('../validators/registerValidator');
const userService = require('../services/UserService');

const saltRounds = 10;

router.post('/',
  registerValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const {
      login, password, firstName, lastName, age,
    } = req.body;
    try {
      const user = await userService.getUser(login);
      if (user) {
        res.status(400).json({ error: 'User with that username exists' });
      } else {
        const hash = await bcrypt.hash(password, saltRounds);
        const user = {
          login,
          password: hash,
          firstName,
          lastName,
          age,
        };
        await userService.addUser(user);
        res.status(200).json({ status: 'success' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred while registering the user' });
    }
  });

module.exports = router;
