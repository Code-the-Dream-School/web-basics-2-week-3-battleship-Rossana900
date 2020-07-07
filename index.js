const battleship = () => {
  let player1 = {
    name: 'player1',  
    shipCount: 0,
    gameBoard: []
    } 
  
  let player2 = {
    name: 'player2',  
    shipCount: 0,
    gameBoard: []
    } 

  player1.name = prompt('player1Name');
  player2.name = prompt('player2Name');

  let boardSize = 4;
  let startShipCount = 4;  
 
  for(let i = 0 ; i < boardSize; i++){
    let boardRow = []
    for (let j = 0; j < boardSize; j++){
      boardRow.push(0)
    } 
    player1.gameBoard.push([].concat(boardRow));
    player2.gameBoard.push([].concat(boardRow)); 
  }
 
  function placeShip(player) {
    let x = Math.floor(Math.random() *4)
    let y = Math.floor(Math.random() *4)
    if (player.gameBoard[x][y] === 1) {
        return
    } else {
      console.log(x,y);
      
      player.gameBoard[x][y]= 1;
      player.shipCount++;
    } 
  }
  
  while(player1.shipCount < startShipCount) {   
      placeShip(player1);
    }  
    
  while(player2.shipCount < startShipCount){
      placeShip(player2);
    }  
    function showBoard(player) {
      for(let i=0; i<player.gameBoard.length; i++){
      //console.log(gameBoard[i].toString());
    }
  }
    let currentPlayer = player1;
    while(player1.shipCount>0 && player2.shipCount>0){
    
    console.log('Current Player', currentPlayer);
      
    //player1.shipCount--;

    
  console.log(player1.gameBoard);
  console.log(player2.gameBoard);
  
  let opponent;
    if (currentPlayer === player1){
     opponent = player2;
  } else {
     opponent = player1;
  }
  let x = prompt('X');
  let y = prompt('Y');
  if(opponent.gameBoard[x][y]===1){
    opponent.gameBoard[x][y] = 0;
    opponent.shipCount--;
    alert('Hit!');  
    }else {
    alert('Miss!');
    }
  
    showBoard(player1);
    showBoard(player2);

    if(currentPlayer === player1) {
      currentPlayer = player2;  
    } else {
      currentPlayer = player1;
    } 
  }
  
  let winner;
  if(player1.shipCount === 0) {
    winner = player2;
  } else {
    winner = player1;
  }
  return `The winner is ${winner.name}!`;
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
