var express = require('express')
var app = express()
var request = require('request')

app.set('view engine', 'ejs')

//==============
//    Routes
//==============
app.get('/', (req, res) => {
   res.render('home')
})

app.get('/results', (req, res) => {
   var searchStr = 'http://www.omdbapi.com/?apikey=thewdb&s=' + req.query.searchText
   request(searchStr, (error, response, body) => {
      if (!error && response.statusCode == 200) {
         var data = JSON.parse(body)
         res.render('results', { data: data })
      }
   })
})
//==============
//    Routes
//==============

app.listen(3000, process.env.IP, (req, res) => {
   console.log('The server has started...')
})