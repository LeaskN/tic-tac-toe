const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]
let currentData = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 'X';
let playable = true;

function clicked(e){
  if(playable === false)return
  if(e.target.innerText === ''){
    e.target.innerText = playerTurn;
    currentData[e.target.id] = playerTurn;
    checkWin();
    console.log(currentData)
    checkDraw();
    swapTurns();
  }
}

function checkWin(){
  return winningConditions.forEach(condition => {
    if(currentData[condition[0]] === currentData[condition[1]] && 
      currentData[condition[0]] === currentData[condition[2]] &&
      currentData[condition[0]] != ''
    ){
      document.getElementById('gameText').innerText = `${playerTurn} Wins!`;
      playable = false;
      return true;
    }
  });
}

function checkDraw(){
  if(currentData.filter(ele => ele === '').length === 0){
    document.getElementById('gameText').innerText = `Draw!`
    return true;
  }
}

function swapTurns(){
  playerTurn = playerTurn === 'X' ? 'O' : 'X';
}

function restart(){
  currentData = ['', '', '', '', '', '', '', '', ''];
  swapTurns();
  Array.from(document.getElementsByClassName('boardSquare')).forEach(square => square.innerText = '');
  document.getElementById('gameText').innerText = `${playerTurn}'s Turn`;
  playable = true;
}