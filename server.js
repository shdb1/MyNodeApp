const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000, function() {
	  console.log('listening on 3000')
	})
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
 // res.send('Hello World')
})

app.post('/quotes', function(req, res) {
  console.log('Hellooooooooooooooooo!')
    console.log(req.body)
  res.sendFile(__dirname + '/index.html')
})

/*MongoClient.connect('link-to-mongodb',function (err, database) 	{
  // ... start the server
})*/