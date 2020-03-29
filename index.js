const express = require('express')
const cors = require('cors')
const app = express()
const projects = require('./Routes/projects')
const login = require('./Routes/login')

app.use(cors())

app.use('/projects', projects)
app.use('/login', login)

app.use(function (req, res) {
  res.send(404)
})

app.listen(7542, function () {
  console.log('Example app listening on port 7542!')
})
