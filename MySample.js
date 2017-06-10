const express = require('express')
var app = express()

app.get('/', function (req, res) {
	 mongoose = require('mongoose');
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/test'); 
  res.send('Hello World!')
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
