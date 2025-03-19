/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
  topRightCorner();
}


function topRightCorner(){
  move();
  turnLeft();
  move();
  turnRight();
  move();
  turnLeft();
  move();
  move();
  turnRight();
  move();
  turnLeft();
  move();
  turnRight();
  move();

}

// ===============OR===================

function main() {
  move()
  move()
  move()
  move()
  turnLeft()
  move()
  move()
  move()
  move()
}
 
// ==============OR=================


function main() {
  moveFourTimes
  turnLeft()
  moveFourTimes
  
}

function moveFourTimes() {
  move()
  move()
  move()
  move()
}

// ===================================================================

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
  beeper();
  beeper();
  putBeeper();
}

function beeper(){
  putBeeper();
  move();
  turnLeft();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  
}


// ================================================================================================


/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   
  fastBeeper();
  fastBeeper();
  beeper();
  
}

function fastBeeper() {
  beeper();
  left();
  two(); 
}

function beeper(){
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  
}

function left() {
  turnLeft();
  move();
  turnLeft();
  move();

}

function two(){
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}


