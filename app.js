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
   request('http://www.omdbapi.com/?apikey=thewdb&s=Bloodsport', (error, response, body) => {
      
      if (!error && response.statusCode == 200) {
         var data = JSON.parse(body)
         // eval(require('locus'))
         for (var i = 0; i < data.Search.length; i++) {
            // eval(require('locus'))
            console.log(data.Search[i].Title)
         }         
      }
   })
   res.render('home')
})
//==============
//    Routes
//==============

app.listen(3000, process.env.IP, (req, res) => {
   console.log('The server has started...')
})