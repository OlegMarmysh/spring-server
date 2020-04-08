const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { value } = req.query
    const data = await require('../projects.json')
    let springProject = data.springProjects
    let springAtticProject = data.springAtticProjects
    if (value) {
      const search = new RegExp(value, 'i')
      springProject = data.springProjects.filter((el) => search.test(el.title))
      springAtticProject = data.springAtticProjects.filter((el) => search.test(el.title))
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
