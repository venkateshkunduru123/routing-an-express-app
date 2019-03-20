/** 
*  Developer controller
*  Handles requests related to developer resources.
*
*/
const express = require('express')
const api = express.Router()

// RESPOND WITH JSON DATA  --------------------------------------------


// GET default data
api.get('/', (req, res) => {
    res.send("This is default data");
})

// GET all JSON
api.get('/hello', (req, res) => {
res.send("Hello");
})

// GET one JSON by ID


// GET JSON by index.html
// api.get('/sample', function (req, res,next){
//   res.sendFile(path.join(__dirname, '../public/sample.html'))
// })

module.exports = api
