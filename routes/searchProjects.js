const express = require('express')
const router = express.Router()
const fsp = require('fs').promises

router.get('/', async (req, res) => {
  try {
    const inputValue = req.query.value
    const search = new RegExp(inputValue, 'i')
    const data = await fsp.readFile('projects.json')
    const filteredSpringProject = JSON.parse(data.toString()).springProjects.filter((el) => search.test(el.title))
    const filteredSpringAtticProject = JSON.parse(data.toString()).springAtticProjects.filter((el) => search.test(el.title))
    res.send({
      springProjects: filteredSpringProject,
      springAtticProjects: filteredSpringAtticProject
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
