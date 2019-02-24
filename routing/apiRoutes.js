var mongoose = require("mongoose");
var mongojs = require("mongojs");


// Require all models
var db = require("../models");

mongoose.connect("mongodb://localhost/ScoresDB", { useNewUrlParser: true });

module.exports = function (app) {

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

    app.get("/game/:id", function (req, res) {
        db.Scores.find({
            "gameID": (req.params.id)
          }).then(function (dbScores) {
            res.json(dbScores)
          })
            .catch(function (err) {
              res.json(err)
            })
        });
}