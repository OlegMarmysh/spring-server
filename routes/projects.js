const express = require('express')
const router = express.Router()
const fsp = require('fs').promises

router.get('/', async (req, res) => {
  try {
    const data = await fsp.readFile('projects.json')
    res.send(data.toString())
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
