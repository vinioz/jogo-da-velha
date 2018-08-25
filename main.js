var i;
var counter;
var pX = new Object();
pX.icon = 'X';
pX.id = 1;
var pO = new Object();
pO.icon = 'O';
pO.id = 1;
player = pX;
var gameOn;
possibilities = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8], [0,4,8], [2,4,6]];
var result = document.getElementById('result');
var playAgain = document.getElementById('playAgain');
var board;
function start(){
  document.body.style.color = 'transparent';
  result.innerHTML ='';
  playAgain.style.color = 'transparent';
  board = [];
  counter = 0;
  gameOn = true;

  for (i = 0; i < 9; i++){
    document.getElementById(i).innerHTML = '';

    board.push(i);
  }
}

function clicked(id){
  var cell = document.getElementById(id);
  if(cell.innerHTML != pX.icon && cell.innerHTML != pO.icon && gameOn){
    counter++;
    cell.innerHTML = player.icon;
    cell.style.color = 'white';
    board[id] = player.icon;
    verify();
    player = (player == pX) ? pO : pX;
  }
}

function verify(){
  var p;
  for(i = 0; i < possibilities.length; i++){
    p = possibilities[i];
    b = board;
    if(b[p[0]] == b[p[1]] && b[p[1]] ==b[p[2]]){
      endGame(player);
      showResult(p);
      return;
    }
  }
  if(counter == 9){
    endGame(null);
  }
}

function endGame(winner){
  gameOn = false;
  if (winner == null){
    result.innerHTML = 'Deu velha!';
  } else {
    result.innerHTML = winner.icon + ' venceu !';

    }
    playAgain.style.color = 'white';
}

function showResult(p){
  for(j = 0; j < 3; j++){
    document.getElementById(p[j]).style.color = 'red';
  }
}
