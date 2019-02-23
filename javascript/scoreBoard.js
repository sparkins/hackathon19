
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/hackathon19", { useNewUrlParser: true });

//Function to add the players username, score and game played to mongo
var playerObject = [
    {playerName: "Alyssa", gameId: 0, Score: 2000},
    {playerName: "Amman", gameId: 1, Score: 1500},
    {playerName: "Chris", gameId: 0, Score: 1750},
    {playerName: "Simon", gameId: 1, Score: 1250}
]

function addNewScore(playerObject) {
    var database = firebase.database().ref();
    var playersRef = database.child('players');
    var newPlayerScore = playersRef.push();
    playerObject.forEach(function (element) {
      newPlayerScore.set({
        userName: element.userName,
        score: element.score,
        game: element.game
      });
      console.log("Added score for ", element.userName);
    });
  }