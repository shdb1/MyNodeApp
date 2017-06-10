var express = require('express'),
  app = express(),
  port = process.env.PORT || 8085,
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
console.log("kicked");
var MongoClient = require('mongodb').MongoClient
, format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
if(err) throw err;

var collection = db.collection('test_insert');
collection.insert({a:2}, function(err, docs) {
    collection.count(function(err, count) {
        console.log(format("count = %s", count));
    });
});

// Locate all the entries using find
collection.find().toArray(function(err, results) {
    console.dir(results);
    // Let's close the db
    db.close();
});
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

var routes = require('./api/routes/todoListRoutes');
console.log("going to kick app");
routes(app);

console.log("kicked");


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
