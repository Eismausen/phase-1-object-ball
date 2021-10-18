function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets", //teamName
            colors: ["Black", "White"], //teamColors
            players: { //obj containing players
                "Alan Anderson": { //stats
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },

            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien": { //stats
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },    
        },
    }
}

let testGame = gameObject();

function numPointsScored(gameObj, playerNameString) {
    let score;
    if (gameObj.home.players[playerNameString].points) {
        score = gameObj.home.players[playerNameString].points;
    } else {
        score = gameObj.away.players[playerNameString].points;
    }
    return `${playerNameString}'s score: ${score}`;
}
console.log(numPointsScored(gameObject(), "Alan Anderson"));

function shoeSize(gameObj, playerNameString) {
    let shoeSize;
    if (gameObj.home.players[playerNameString].shoe) {
        shoeSize = gameObj.home.players[playerNameString].shoe;
    } else {
        shoeSize = gameObj.away.players[playerNameString].shoe;
    }
    return `${playerNameString}'s shoe size: ${shoeSize}`;
}
console.log(shoeSize(gameObject(), "Alan Anderson"));

function teamColors(gameObj, teamNameString) {
    let returnArrColors;
    if (gameObj.home.teamName === teamNameString) {
        returnArrColors = gameObj.home.colors;
    } else {
        returnArrColors = gameObj.away.colors;
    }
    return returnArrColors;
}
console.log(teamColors(gameObject(), "Charlotte Hornets"));

function teamNames(gameObj) {
    let teamNames = [gameObj.home.teamName, gameObj.away.teamName];
    return teamNames;
}
console.log(teamNames(gameObject()));

function playerNumbers(gameObj, teamNameStr) {
    let jerseyNumbers = [];
    if (gameObj.home.teamName === teamNameStr) {
        for (const player of Object.keys(gameObj.home.players)) {
            jerseyNumbers.push(gameObj.home.players[player].number)
        }
    } else {
        for (const player of Object.keys(gameObj.away.players)) {
            jerseyNumbers.push(gameObj.away.players[player].number)
        }
    }
    return jerseyNumbers;
}
console.log(playerNumbers(gameObject(), "Charlotte Hornets"));


function playerStats(gameObj, playerNameStr) {
    let playerStatObj = {};

    if (gameObj.home.players[playerNameStr]) {
        playerStatObj = {...gameObj.home.players[playerNameStr]}
    } else {
        playerStatObj = {...gameObj.away.players[playerNameStr]}
    }
    return playerStatObj;
}
console.log(playerStats(testGame, "Brendan Haywood"));

function bigShoeRebounds(gameObj, ...playerNames) {
    let biggestShoeWearer = 'this_might_be_more_useful_as_a_saved_player_object_instead_of_a_string';
    let biggestShoeSize = 0;
    //for to iterate over playerNames
    for (const player of playerNames) { 
        if (gameObj.home.players[player]) {
            if (gameObj.home.players[player].shoe > biggestShoeSize) {
                biggestShoeWearer = player;
                biggestShoeSize = gameObj.home.players[player].shoe;
            }
        } else { //else for checking if player's team is home/away
            if (gameObj.away.players[player].shoe > biggestShoeSize) {
                biggestShoeWearer = player;
                biggestShoeSize = gameObj.away.players[player].shoe;
            }
        } // end team check
    } // end playerName iteration - biggest shoe size identified, player name saved
    //key through saved player 
    if (gameObj.home.players[biggestShoeWearer]) {
        return gameObj.home.players[biggestShoeWearer].rebounds;
    } else {
        return gameObj.away.players[biggestShoeWearer].rebounds;
    }
}
console.log(bigShoeRebounds(gameObject(), "Alan Anderson", "Bismak Biyombo", "Mason Plumlee", "Jason Terry", "Brook Lopez", "Ben Gordon"));

//BONUS questions

function mostPointsScored (gameObj, ...playerNames) {
    let highestScorer = '';
    let highScore = -1;
    for (const player of playerNames) {
        if (gameObj.home.players[player]) {
            if (gameObj.home.players[player].points > highScore) {
                highScore = gameObj.home.players[player].points;
                highestScorer = player;
            } 
        } else {
            if (gameObj.away.players[player].points > highScore) {
                highScore = gameObj.away.players[player].points;
                highestScorer = player;
            }
        }
    }
    return highestScorer;
}
console.log(mostPointsScored(gameObject(), "Alan Anderson", "Bismak Biyombo", "Mason Plumlee", "Jason Terry", "Brook Lopez", "Ben Gordon"));

function winningTeam (gameObj) {
    let homeScore = 0;
    let awayScore = 0;
    for (const player in gameObj.home.players) {
        homeScore += player.score;
    }
    for (const player in gameObj.away.players) {
        awayScore += player.score;
    }
    if (homeScore > awayScore) {
        return "Home";
    } else {
        return "Away";
    }
}
console.log(winningTeam(gameObject()));

function playerWithLongestName (...playerNames) {
    let longestName = '';
    let nameLength = 0;
    for (const player of playerNames) {
        if (player.length > nameLength) {
            longestName = player;
            nameLength = longestName.length;
        }
    }
    return longestName;
}
console.log(playerWithLongestName("Alan Anderson", "Bismak Biyombo", "Mason Plumlee", "Jason Terry", "Brook Lopez", "Ben Gordon"));

//Super BONUS
function doesLongNameStealATon (gameObj, ...playerNames) {
    let longestName = '';
    let mostSteals = 0;
    for (const player of playerNames) {
        if (gameObj.home.players[player]) {
            if (player.length > longestName) {
                longestName = player;
            }
            if (gameObj.home.players[player].steals > mostSteals) {
                mostSteals = gameObj.home.players[player].steals;
            }
        } else {
            if (player.length > longestName) {
                longestName = player;
            }
            if (gameObj.away.players[player].steals > mostSteals) {
                mostSteals = gameObj.away.players[player].steals;
            }
        }
    }
    if (gameObj.home.players[longestName]) {
        return (gameObj.home.players[longestName].steals === mostSteals);
    } else {
        return (gameObj.away.players[longestName].steals === mostSteals);
    }
}
console.log(doesLongNameStealATon(gameObject(), "Alan Anderson", "Bismak Biyombo", "Mason Plumlee", "Jason Terry", "Brook Lopez", "Ben Gordon"));