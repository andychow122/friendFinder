var path = require("path");

var friendsArray = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req, res){
		res.json(friendsArray);
	});

	app.post("/api/friends", function(req, res) {

		var bestMatch = {
			name: "",
			image: "",
			difference: 1000
		};

		var totalDifference = 0;
		var userData = req.body;
		var userScores = userData.scores;

	// 	console.log(userScores[0]);
	
	// console.log(friendsArray[0].scores[0]);

	for (var i = 0; i<friendsArray.length;i++){
		totalDifference = 0;
		console.log(friendsArray[i]);

		for (var j = 0; j < friendsArray[i].scores[j]; j++){
			totalDifference += Math.abs(parseInt(userScores[j])-parseInt(friendsArray[i].scores[j]));
			// console.log(totalDifference);
			if (totalDifference <= bestMatch.difference) {
				bestMatch.name = friendsArray[i].name;
				bestMatch.image = friendsArray[i].image;
				bestMatch.difference = totalDifference;
			}
		}
	}
	friendsArray.push(userData);
	res.json(bestMatch);
		
	  });

};