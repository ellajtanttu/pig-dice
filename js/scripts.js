// Business Logic

t
function Player(roll, turnScore, totalScore, turn) {
  this.roll = roll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

// function rollDice() {
//   return Math.ceil(Math.random() * 6);
// }

// new game button "Let's play again!"
// Player.prototype.setDefaults = function(){
//   this.roll = 0;
//   this.turnScore = 0;
//   this.totalScore = 0;
// }

Player.prototype.rollDice = function (){
  this.roll = Math.ceil(Math.random() * 6);
  if ( this.roll > 1 ) {
    turnScore += this.roll;
    this.totalScore += this.turnScore;
    if (this.totalScore >= 100) {
      this.winner();
    }
  } else {
    this.turnScore = 0;
    toggle();
  }
}

Player.prototype.clickHold = function() {
  this.totalScore += this.turnScore;
  this.turnscore = 0;
  toggle();
}

Player.prototype.winner = function() {
  $("#gameboard").hide();
  $("#winner").show();
}


// -----------

Player.prototype.resetAndChange = function() {
  this.turnScore = 0;
}

// Next steps:
// 1. round out what the turnchange method will Be


Player.prototype.turnChange = function() {
  if (this.totalScore < 100) {
    if (this.roll ===  1) {
      return this.resetAndChange();
    // } else if (holdVariable === true ){
    //   this.totalScore.grandTotal();
    //   this.resetAndChange();
    }
  }
}

if (this.turnscore + this.totalScore >= 100)
  this.totalScore.grandTotal();
  return this.win = true;




let player1 = true;
let player2 = false;

// User Interface Logic

// testPlayer1.turnChange() - false
// testPlayer2.turnChange() - true

// two forms to individually create a player Object

// one form,
