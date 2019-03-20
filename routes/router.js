/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const path = require('path')
const app = express()
console.log('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  console.log('Request to /')
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/sample', (req, res, next) => {
  console.log('Request to /sample.html')
  res.sendFile(path.join(__dirname, '../public/sample.html'))
})

// app.use('/admin', router, function (req, res) {
//   res.sendStatus(404)
// })

// Defer path requests to a particular controller
router.use('/dev', require('../controllers/developer.js'))
router.use('/venky', require('../controllers/Venky.js'))


console.log('END routing')
module.exports = router
