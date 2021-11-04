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

Player.prototype.setDefaults = function(){
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.turn = false;
}

Player.prototype.currentScore = function (){
  let roll = rollDice();
  if ( roll > 1 ) {
    return this.turnScore += roll;
  } else {
    return this.turnScore = 0;
  }
}

Player.prototype.grandTotal = function() {
  this.totalScore += this.turnScore;
  return this.totalScore;
}

// Next steps:
// 1. round out what the turnchange method will Be
// 2. round out turnchange method

Player.prototype.turnChange = function (){
  if (this.roll ===  1) {
    this.turnScore = 0;
    this.turnChange = false ;
  } else if (holdVariable === true ){
      this.totalScore.grandTotal();
      this.turnScore = 0;
      this.turnChange = false ;
    // totalScoreNumber += turnScore;
    this.turnChange = false;
  } else {
    this.turnChange = true;
  }
}





// User Interface Logic