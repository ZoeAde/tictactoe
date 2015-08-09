//Create a Game() class that creates instances of the Board() class, Players() class (you need two players) and has a turnCounter property to indicate whose turn it is and determine the winner in case of a draw.

var Game = function(player1, player2) {
  this.board = new Board();
  this.player1 = new Player();
  this.player2 = new Player();
  this.turnCounter = 1;
};

// nextPlayer() - sets the turn based on the turnCounter,
//checks the winner from the Board() class, and updates the DOM.
Game.prototype.nextPlayer = function() {
  if (this.turnCounter === 1) {
    this.turnCounter = 2;
  }
  else if (this.turnCounter === 2) {
    this.turnCounter = 1;
  }
};

//method to determine whose turn it is based on turn counter



// init() - initializes a new game with a board and two players. Make sure to add a click event handler for each of the board's cells on the DOM. This should in turn call the makeMove() method on the Board() class.
Game.prototype.init = function() {
  this.board = Board;

};

// Create a Player() class that has a team, cellID, and playerScore property.
var Player = function(team) {
  this.team = 'x';
  this.cellID = [];
  this.playerScore = 0;
};

// updateScore() - updates the scoreboard based on the playerScore from the Player() class. Updates the DOM.
Player.prototype.updateScore = function() {
  this.playerScore ++;
};

// Create a Board() class that has a 'moveArr' property with a null array to hold the moves along with a $cells property to assign each cell to a box in the DOM. Finally, add an event handler on the reset button to call the resetBoard() method.
var Board = function() {
  this.moveArr = [null, null, null, null, null, null, null, null, null];
  this.$cells = $('.box');
};

Board.prototype.resetBoard  function() {
  this.moveArr = [null, null, null, null, null, null, null, null, null];
  //reset score, turncounter, players, reset dom
  this.player1.playerScore = 0;
  this.player2.playerScore = 0;
};
// makeMove() - sets a box to a player/team and updates the moveArr array. Make sure to prevent occupied boxes from being used (alert the user).
Board.prototype.makeMove() = function() {
//event that adds x or o to board on dom
//this.moveArr[ID FROM DOM] = EITHER X OR O
}


// winCondition() - array which holds the winining conditions for the board
Board.prototype.winCondition = function() {
  var winningArr = {
    //array of possible winning hands
};

// checkWinner() - checks the board for winning combinations against the values of each player/team and alerts the players which player won or if it's a tie
Board.prototype.checkWinner = function() {
//check only on players turn
};

// resetBoard() - resets the board to its initial state and resets the moveArr holding the player values (via the nullArray() method) and turn counter


// nullArray() - resets the moveArr
Board.prototype.nullArray = function() {
  this.moveArr = [];
};

//jQuery
$(document).on('ready', function() {

//call reset board on instance
$('.reset').on('click', function() {

  });


});

//7 ways to win, array of arrays
/*
[0,1,2
0,3,6

*/
