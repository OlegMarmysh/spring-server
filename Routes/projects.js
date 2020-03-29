const express = require('express')
const router = express.Router()
const { getProjects } = require('../repository')

router.get('/', async (req, res) => {
  const projects = await getProjects()
  res.send(projects)
})

module.exports = router
