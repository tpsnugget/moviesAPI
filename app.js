var express = require('express')
var app = express()

app.set('view engine', 'ejs')

//==============
//    Routes
//==============
app.get('/', (req, res) => {
   res.render('home')
})
//==============
//    Routes
//==============

app.listen(3000, (req, res) => {
   console.log('The server has started...')
})