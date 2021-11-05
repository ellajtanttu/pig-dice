// Business Logic

function Player(roll, turnScore, totalScore, turn) {
  this.roll = roll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.turn = turn;
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
    this.toggle();
    console.log("toggle triggered in rollDice()")
  }
}

Player.prototype.toggle = function() {
  if (this.turn === true) {
    console.log(this.turn + " toggled from true to false")
    return this.turn = false;
  } else {
    console.log(this.turn + " toggled from false to true")
    return this.turn = true;
  }
}

Player.prototype.clickHold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  this.toggle();
}

Player.prototype.winner = function() {
  $("#gameboard").hide();
  $("#winner").show();
}

function toggle() {
  $("#player1roll , #player1hold").toggle();
  $("#player2roll , #player2hold").toggle();
}

// User Interface Logic:


$(document).ready(function() {
  $("#playerForm").submit(function(event) {
    event.preventDefault();
    console.log("form submitted");
    const nameOne = $("input#p1Name").val();
    const nameTwo = $("input#p2Name").val();

    let playerOne = new Player(0, 0, 0, true);
    let playerTwo = new Player(0, 0, 0, false);
    $(".gameboard").show();
    // $("#player2roll").hide();
    // $("#player2hold").hide();

    // if (playerOne.turn === true) {
    //   $("#player1roll").show();
    //   $("#player1hold").show();
    //   $("#player2roll").hide();
    //   $("#player2hold").hide();
    // } else {
    //   $("#player1roll").hide();
    //   $("#player1hold").hide();
    //   $("#player2roll").show();
    //   $("#player2hold").show();
    //   return playerTwo.toggle();
    // }

    // if (playerTwo.turn === true) {
    //   $("#player2roll").show();
    //   $("#player2hold").show();
    //   $("#player1roll").hide();
    //   $("#player1hold").hide();
    // } else {
    //   $("#player2roll").hide();
    //   $("#player2hold").hide();
    //   $("#player1roll").show();
    //   $("#player1hold").show();
    //   return playerOne.toggle();
    // }

    $("#player1roll").click(function() {
      playerOne.rollDice();
      console.log("player one round score is " + playerOne.turnScore);
      $("#currentroll").html(playerOne.roll);
      $("#player1roundscore").html(playerOne.turnScore);
    });

    $("#player1hold").click(function() {
      playerOne.clickHold();
      console.log("player one total score is " + playerOne.totalScore);
      $("#player1totalscore").html(playerOne.totalScore);
      playerOne.toggle();
      console.log("p1 toggled" + playerOne.turn)
      playerTwo.toggle();
      console.log("p2 toggled" + playerTwo.turn)
    });

    $("#player2roll").click(function() {
      playerTwo.rollDice();
      console.log("player two round score is " + playerTwo.turnScore);
      $("#currentroll").html(playerTwo.roll);
      $("#player2roundscore").html(playerTwo.turnScore);
    });

    $("#player2hold").click(function() {
      playerTwo.clickHold();
      console.log("player two total score is " + playerTwo.totalScore);
      $("#player2totalscore").html(playerTwo.totalScore);
      console.log("p1 toggled" + playerOne.turn)
      playerTwo.toggle();
      console.log("p2 toggled" + playerTwo.turn)
    });



  });
});



