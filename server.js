const express = require('express');
const app = express();
const bodyParser= require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
var db
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000, function() {
	  console.log('listening on 3000')
	})
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
 // res.send('Hello World')
})


/*var mongodb = require('mongodb');
var uri = 'mongodb://shadab:shadab2266@ds119772.mlab.com:19772/shdb';
mongodb.MongoClient.connect(uri, function (err, db) {
     adventure! 
});*/

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var insertDocument = function(db, callback) {
	   db.collection('restaurants').insertOne( {
	      "address" : {
	         "street" : "2 Avenue",
	         "zipcode" : "10075",
	         "building" : "1480",
	         "coord" : [ -73.9557413, 40.7720266 ]
	      },
	      "borough" : "Manhattan",
	      "cuisine" : "Italian",
	      "grades" : [
	         {
	            "date" : new Date("2014-10-01T00:00:00Z"),
	            "grade" : "A",
	            "score" : 11
	         },
	         {
	            "date" : new Date("2014-01-16T00:00:00Z"),
	            "grade" : "B",
	            "score" : 17
	         }
	      ],
	      "name" : "Vella",
	      "restaurant_id" : "41704620"
	   }, function(err, result) {
	    assert.equal(err, null);
	    console.log("Inserted a document into the restaurants collection.");
	    callback();
	  });
	};
	
app.post('/quotes', function(req, res) {
  console.log('Hellooooooooooooooooo!')
  MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  insertDocument(db, function() {
	      db.close();
	  });
	});
})

