const express = require('express')
const cors = require('cors')
const app = express()
const projects = require('./routes/projects')
const login = require('./routes/login')
const register = require('./routes/register')
const bodyParser = require('body-parser')
const middleware = require('./middlewars/checkToken')

const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/login', login)
app.use('/register', register)
app.use('/projects', middleware.checkToken, projects)

app.use(function (req, res) {
  res.send(404)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
