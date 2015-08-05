$(document).ready(function() {
console.log('check!');
var box = $('.box');

box.on('click', function() {
  Player.cellID = this;
  this.innerHTML = 'x';
  makeMove();
});


});

var resetBtn = $('.reset');

resetBtn.on('click', function() {
  resetBoard();
});
