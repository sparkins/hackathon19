var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ScoreBoardSchema object
var ScoresSchema = new Schema({
  // `playerName` type String
  playerName: String,
  // `gameID` type Integer to store the game that was played  
  gameID: Number,
  // `Score` type Integer to store the score that was achieved  
  Score: Number
});

// This creates our model from the above schema, using mongoose's model method
var Scores = mongoose.model("Scores", ScoresSchema);

// Export the Book model
module.exports = Scores;
