
//variables
const cellWidth = 250;
const cellHeight = 250;

let cell1Color = 'gray';
let cell2Color = 'gray';
let cell3Color = 'gray';
let cell4Color = 'gray';
let cell5Color = 'gray';
let cell6Color = 'gray';
let cell7Color = 'gray';
let cell8Color = 'gray';
let cell9Color = 'gray'; 

const player1 = "red";
const player2 = 'blue';

let turn;
let gameOver = false;


function setup() {
  createCanvas(1800, 1000);
  
  //reset game button
  const resetButton = document.getElementById('reset-button');

  resetButton.addEventListener('click', function() {
    location.reload();
  });

  const randomChoice = Math.floor(random(1, 3));

  if(randomChoice == 1){
    turn = player1;
  } else if (randomChoice == 2) {
    turn = player2;
  }
  
  console.log(turn);
}


function draw() {
  background(190,190,190);
  strokeWeight(15);

  push();
  fill(90, 90, 90);
  stroke('black')
  rect(700,0, 1100, 110)
  pop();

  push();
  fill('black')
  rect(775,25, 1000, 60);
  pop();

  //tells which player's turn it is.
  push();
  textSize(50);
  strokeWeight(2);
  stroke(turn);
  fill(turn);
  text( "It's player "+ turn + "'s turn.", 790, 72);
  pop();

  push();
  fill(50,50,50)
  rect(0, 400, 1800, 900)
  pop();

  //cell 1
  fill(cell1Color);  
  rect(0 * cellWidth, 0 * cellHeight, cellWidth, cellHeight);
  if(cell1Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(125, 125, 150, 150);
    pop();
  } else if(cell1Color == player2) {
    push();
    stroke(0,0, 150);
    line(50,50,200,200);
    line(50,200,200,50);
    pop();
  }

  //cell 2
  fill(cell2Color);
  rect(1 * cellWidth, 0 * cellHeight, cellWidth, cellHeight);
  if(cell2Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(375, 125, 150, 150);
    pop();
  } else if(cell2Color == player2) {
    push();
    stroke(0,0, 150);
    line(450, 50 , 300, 200);
    line(300, 50 , 450 , 200);
    pop();
  }

  //cell 3
  fill(cell3Color); 
  rect(2 * cellWidth, 0 * cellHeight, cellWidth, cellHeight);
  if(cell3Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(625, 125, 150, 150);
    pop();
  } else if(cell3Color == player2) {
    push();
    stroke(0,0, 150);
    line(550, 50, 700, 200);
    line(700, 50, 550, 200 );
    pop();
  }

  //cell 4
  fill(cell4Color);
  rect(0 * cellWidth, 1 * cellHeight, cellWidth, cellHeight);
  if(cell4Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(125, 375, 150, 150);
    pop();
  } else if(cell4Color == player2) {
    push();
    stroke(0,0, 150);
    line(50, 300, 200, 450);
    line(50, 450, 200, 300);
    pop();
  }

  //cell 5
  fill(cell5Color);
  rect(1 * cellWidth, 1 * cellHeight, cellWidth, cellHeight);
  if(cell5Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(375, 375, 150, 150);
    pop();
  } else if(cell5Color == player2) {
    push();
    stroke(0,0, 150);
    line(300, 300 , 450, 450);
    line(300, 450 , 450 , 300);
    pop();
  }

  //cell 6
  fill(cell6Color);
  rect(2 * cellWidth, 1 * cellHeight, cellWidth, cellHeight);
  if(cell6Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(625, 375, 150, 150);
    pop();
  } else if(cell6Color == player2) {
    push();
    stroke(0,0, 150);
    line(550, 300 , 700, 450);
    line(550, 450, 700, 300);
    pop();
  }

  //cell 7
  fill(cell7Color);
  rect(0 * cellWidth, 2 * cellHeight, cellWidth, cellHeight);
  if(cell7Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(125, 625, 150, 150);
    pop();
  } else if(cell7Color == player2) {
    push();
    stroke(0,0, 150);
    line(50, 550, 200, 700);
    line(50, 700, 200, 550);
    pop();
  }

  //cell 8
  fill(cell8Color);
  rect(1 * cellWidth, 2 * cellHeight, cellWidth, cellHeight);
  if(cell8Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(375, 625, 150, 150);
    pop();
  } else if(cell8Color == player2) {
    push();
    stroke(0,0, 150);
    line(300, 550, 450, 700);
    line(300, 700, 450, 550);
    pop();
  }

  //cell 9
  fill(cell9Color);
  rect(2 * cellWidth, 2 * cellHeight, cellWidth, cellHeight);
  if(cell9Color == player1) {
    push();
    stroke(150,0,0);
    ellipse(625, 625, 150, 150);
    pop();
  } else if(cell9Color == player2) {
    push();
    stroke(0,0, 150);
    line(550, 550, 700, 700);
    line(550, 700, 700, 550);
    pop();
  }

  //game-over screen
  if(gameOver == true) {
    fill('black');
    rect(775,25, 1000, 60);
    push();
    strokeWeight(10);
    stroke(125,125,125);
    fill('black');
    rect(150,325,450,100);
    noLoop();
    pop();
      if(turn === player1){
        textSize(40);
        strokeWeight(4);
        stroke('black')
        fill('blue');
        text("Player Blue wins", 225,390);
      } else {
        textSize(40);
        strokeWeight(3);
        stroke('black');
        fill('red');
        text("Player Red wins", 225,390);
      }
  }
}


function mousePressed() {
  //When Mouse Clicks Cell, The Cell Changes Color.
  
  //cell 1
  if(mouseX > 0 && mouseX < cellWidth && mouseY > 0 && mouseY < cellHeight ) {
    if(cell1Color === 'gray'){
      cell1Color = turn;
      changeTurn();
    }
  }

  //cell 2
  if(mouseX > cellWidth && mouseX < 2* cellWidth && mouseY > 0 && mouseY < cellHeight ) {
    if(cell2Color === 'gray'){
      cell2Color = turn;
      changeTurn();
    }
  }

  //cell 3
  if(mouseX > 2 * cellWidth && mouseX < 3* cellWidth && mouseY > 0 && mouseY < cellHeight ) {
    if(cell3Color === 'gray'){
      cell3Color = turn;
      changeTurn();
    }
  }

  //cell 4
  if(mouseX > 0 && mouseX < cellWidth && mouseY > cellHeight && mouseY < 2* cellHeight ) {
    if(cell4Color === 'gray'){
      cell4Color = turn;
      changeTurn();
    }
  }

  //cell 5
  if(mouseX > cellWidth && mouseX < 2* cellWidth && mouseY > cellHeight && mouseY < 2* cellHeight ) {
    if(cell5Color === 'gray'){
      cell5Color = turn;
      changeTurn();
    }
  }

  //cell 6
  if(mouseX > 2* cellWidth && mouseX < 3* cellWidth && mouseY > cellHeight && mouseY < 2* cellHeight ) {
    if(cell6Color === 'gray'){
      cell6Color = turn;
      changeTurn();
    }
  }

  //cell 7
  if(mouseX > 0 && mouseX < cellWidth && mouseY > 2* cellHeight && mouseY < 3* cellHeight ) {
    if(cell7Color === 'gray'){
      cell7Color = turn;
      changeTurn();
    }
  }

  //cell 8
  if(mouseX > cellWidth && mouseX < 2* cellWidth && mouseY > 2* cellHeight && mouseY < 3* cellHeight ) {
    if(cell8Color === 'gray'){
      cell8Color = turn;
      changeTurn();
    }
  }

  //cell 9
  if(mouseX > 2* cellWidth && mouseX < 3* cellWidth && mouseY > 2* cellHeight && mouseY < 3* cellHeight ) {
    if(cell9Color = 'gray'){
      cell9Color = turn;
      changeTurn();
    }
  }

  if(!gameOver){

    if(winCondition()){
      gameOver = true;
    }
  }
}


function changeTurn() {
  
  //Changes turn between players
  if(turn == player1) {
    turn = player2;
  } else if (turn == player2) {
    turn = player1;
  }
}

function winCondition() {
  
  //horizontal rows
if(
  (cell1Color == cell2Color && cell2Color == cell3Color && cell1Color !== 'gray') || 
  (cell4Color == cell5Color && cell5Color == cell6Color && cell4Color !== 'gray') || 
  (cell7Color == cell8Color && cell8Color == cell9Color && cell7Color !== 'gray')) 
  {
    if(turn === player1) {
      console.log("blue wins")
      gameOver = true;
    } else {
      console.log("red wins")
      gameOver = true;
    }
  }

  //vertical rows
if(
  (cell1Color === cell4Color && cell4Color == cell7Color && cell1Color !== 'gray') || 
  (cell2Color === cell5Color && cell5Color == cell8Color && cell2Color !== 'gray') || 
  (cell3Color === cell6Color && cell6Color == cell9Color && cell3Color !== 'gray')) 
  {
    if(turn === player1) {
      console.log("blue wins")
      gameOver = true;
    } else {
      console.log("red wins")
      gameOver = true;
    }

  }

  //diagonal rows
if(
  (cell1Color === cell5Color && cell5Color === cell9Color && cell1Color !== 'gray') || 
  (cell3Color === cell5Color && cell5Color === cell7Color && cell3Color !== 'gray'))
  {
    if(turn === player1) {
      console.log("blue wins")
      gameOver = true;
    } else {
      console.log("red wins")
      gameOver = true;
    }
  }
  
  return false; 
}


