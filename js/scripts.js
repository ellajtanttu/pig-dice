// Business Logic

function Player(roll, turnScore, totalScore) {
  this.roll = roll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

// new game button "Let's play again!" ***needs $("#gameboard").show***
// Player.prototype.setDefaults = function(){
//   this.roll = 0;
//   this.turnScore = 0;
//   this.totalScore = 0;
// }

Player.prototype.rollDice = function (){
  rollNumber = Math.ceil(Math.random() * 6);
  console.log("rollNumber " + rollNumber);
  this.roll = rollNumber;
  console.log("this.roll is " + this.roll);
  if ( this.roll > 1 ) {
    this.turnScore += this.roll;
    if (this.totalScore + this.turnScore >= 100) {
      this.winner();
    }
  } else {
    this.turnScore = 0;
    toggle();
  }
}

Player.prototype.rollDice = function (){
  rollNumber = Math.ceil(Math.random() * 6);
  console.log("rollNumber " + rollNumber);
  this.roll = rollNumber;
  console.log("this.roll is " + this.roll);
  if ( this.roll > 1 ) {
    if (this.totalScore + this.turnScore + this.roll >= 100) {
      return this.winner();
    } else {
      return this.turnScore += this.roll;
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


// User Interface Logic:

function toggle () {
  $("")
}

$(document).ready(function() {
  $("#").submit(function(event) {

  });
});