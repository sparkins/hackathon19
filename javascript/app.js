


function buildScoreBoard(scoresArr) {
    // var scoresArr = [
    //     { name: "Alyssa", score: 2500 },
    //     { name: "Amaan", score: 1250 },
    //     { name: "Chris", score: 2600 },
    //     { name: "Simon", score: 1750 },        
    //     { name: "Alyssa", score: 2750 },
    //     { name: "Amaan", score: 2250 },
    //     { name: "Chris", score: 1600 },
    //     { name: "Simon", score: 2450 }
    // ]

    var sortedScores = _.sortBy(scoresArr, 'score', function (element) {
        return element.score;
    }).reverse().slice(0,5);
    console.log(sortedScores);
}
buildScoreBoard();