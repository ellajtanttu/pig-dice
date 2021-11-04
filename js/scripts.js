// Business Logic


function Player(roll, turnScore, totalScore, turn) {
  this.roll = roll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.turn = turn;
}



function rollDice() {
  return Math.ceil(Math.random() * 6);
}

// Player.prototype.setDefaults = function(){
//   this.roll = 0;
//   this.turnScore = 0;
//   this.totalScore = 0;
//   this.turn = false;
// }

Player.prototype.currentScore = function (){
  this.roll = rollDice();
  if ( this.roll > 1 ) {
    return this.turnScore += this.roll;
  } else {
    return this.turnScore = 0;
  }
}


Player.prototype.grandTotal = function() {
  this.totalScore += this.turnScore;
  return this.totalScore;
}

// -----------

Player.prototype.resetAndChange = function() {
  this.turnScore = 0;
  this.turn = false;
}

// Next steps:
// 1. round out what the turnchange method will Be


Player.prototype.turnChange = function() {
  if ((this.turn === true) && (this.totalScore < 100)) {
    if (this.roll ===  1) {
      return this.resetAndChange();
    // } else if (holdVariable === true ){
    //   this.totalScore.grandTotal();
    //   this.resetAndChange();
    } else {
      return this.turn = true;
    }
  }
}

if ((this.turn === true) && (this.turnscore + this.totalScore >= 100))
  this.turn = false;
  this.totalScore.grandTotal();
  return this.win = true;




let player1 = true;
let player2 = false;

// User Interface Logic

// testPlayer1.turnChange() - false
// testPlayer2.turnChange() - true

// two forms to individually create a player Object

// one form,
