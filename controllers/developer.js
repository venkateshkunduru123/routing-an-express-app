/** 
*  Developer controller
*  Handles requests related to developer resources.
*
*/
const express = require('express')
const api = express.Router()
const Model = require('../models/developer.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find developer with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.developers.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id) 
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// GET JSON by index.html
// api.get('/sample', function (req, res,next){
//   res.sendFile(path.join(__dirname, '../public/sample.html'))
// })



// RESPOND WITH VIEWS  --------------------------------------------

// later

// RESPOND WITH DATA MODIFICATIONS  -------------------------------

// later

module.exports = api
