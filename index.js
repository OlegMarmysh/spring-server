const express = require('express')
const cors = require('cors')
const app = express()
const projects = require('./routes/projects')
const login = require('./routes/login')
const register = require('./routes/register')
const jwt = require('jsonwebtoken')

const port = process.env.PORT || 3001

app.use(cors())
app.use('/login', login)
app.use('/register', register)
app.use((req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, 'MySuper_secret', (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }
      req.user = user
      next()
    })
  } else {
    res.sendStatus(401)
  }
})
app.use('/projects', projects)

app.use(function (req, res) {
  res.send(404)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
