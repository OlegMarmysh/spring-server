const jwt = require('jsonwebtoken')
const consts = require('../consts')

const checkToken = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    try {
      const user = await jwt.verify(token, consts.signature)
      req.user = user
      next()
    } catch (error) {
      res.sendStatus(401)
      console.log(error)
    }
  } else {
    res.sendStatus(401)
  }
}

module.exports = {
  checkToken
}
