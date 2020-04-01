const express = require('express')
const cors = require('cors')
const app = express()
const projects = require('./routes/projects')
const login = require('./routes/login')
const searchProjects = require('./routes/searchProjects')
const register = require('./routes/register')

const port = process.env.PORT || 3001

app.use(cors())

app.use('/projects', projects)
app.use('/login', login)
app.use('/search-projects', searchProjects)
app.use('/register', register)

app.use(function (req, res) {
  res.send(404)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
