const fs = require('fs')

const getProjects = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('projects.json', (err, data) => {
      if (err) throw err
      resolve(data.toString())
    })
  })
}

const getRegisteredUsers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('registeredUsers.json', (err, data) => {
      if (err) throw err
      resolve(JSON.parse(data.toString()))
    })
  })
}

exports.getProjects = getProjects
exports.getRegisteredUsers = getRegisteredUsers
