const express = require('express')
const router = express.Router()
const fsp = require('fs').promises

router.get('/', async (req, res) => {
  try {
    const { value } = req.query
    const data = await fsp.readFile('projects.json')
    if (value) {
      const search = new RegExp(value, 'i')
      const filteredSpringProject = JSON.parse(data.toString()).springProjects.filter((el) => search.test(el.title))
      const filteredSpringAtticProject = JSON.parse(data.toString()).springAtticProjects.filter((el) => search.test(el.title))
      res.json({
        springProjects: filteredSpringProject,
        springAtticProjects: filteredSpringAtticProject
      })
    } else {
      res.json({
        springProjects: JSON.parse(data.toString()).springProjects,
        springAtticProjects: JSON.parse(data.toString()).springAtticProjects
      })
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
