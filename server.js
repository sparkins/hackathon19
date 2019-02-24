var express = require('express');

var app = express();

var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Require all models
var db = require("./models");

app.use(express.static("public"));

var bodyParser = require('body-parser')

var PORT = process.env.PORT || 3000;

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

mongoose.connect("mongodb://localhost/ScoresDB", { useNewUrlParser: true });

// db.Scores.create({ playerName: "Simon", gameID: 1, Score: 1650 })
// 	.then(function (dbScore) {
// 		// If saved successfully, print the new Library document to the console
// 		console.log(dbScore);
// 	})
// 	.catch(function (err) {
// 		// If an error occurs, print it to the console
// 		console.log(err.message);
// 	});


app.get('/all-scores', function (req, res) {
	db.Scores.find({})
		.then(function (dbScore) {
			res.json(dbScore);
		})
		.catch(function (err) {
			res.json(err);
		});
});

app.listen(PORT, function () {
	console.log('listening on ' + PORT);
});