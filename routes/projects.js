const express = require('express')
const router = express.Router()
const projectService = require('../services/ProjectService')

router.get('/', async (req, res) => {
  try {
    const { value } = req.query
    let springProject = await projectService.getSpringProject()
    let springAtticProject = await projectService.getSpringAtticProject()
    if (value) {
      const search = new RegExp(value, 'i')
      springProject = springProject.filter((el) => search.test(el.title))
      springAtticProject = springAtticProject.filter((el) => search.test(el.title))
    }
    res.json({
      springProjects: springProject,
      springAtticProjects: springAtticProject
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
