// Business Logic


function Player(roll, turn, turnScore, totalScore) {
  this.roll = roll;
  this.turnScore = turnScore;
  this.totalScoreNumber = totalScore;
  this.turn = turn;
}

function rollDice() {
  return Math.ceil(Math.random() * 6);
}

Player.prototype.setDefaults = function(){
  this.roll = 0;
  this.turnScore = 0;
  this.totalScoreNumber = 0;
  this.turn = false;
}

Player.prototype.turnChange = function (){
  if (this.roll ===  1) {
    this.turnChange = false ;
  } else if (holdVariable === true ){
    totalScoreNumber += turnScore;
    this.turnChange = false;
  } else {
    this.turnChange = true;
  }
}





// User Interface Logic