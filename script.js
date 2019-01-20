//door element variables 
const doorImage1  = document.getElementById("door1");
const doorImage2  = document.getElementById("door2");
const doorImage3  = document.getElementById("door3");
const startButton = document.getElementById("start");

//image variables
const host = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/";
const botDoorPath    = host + "robot.svg";
const beachDoorPath  = host + "beach.svg";
const spaceDoorPath  = host + "space.svg";
const closedDoorPath = host + "closed_door.svg"

//game play variables
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;


//isBot() - checks if door opened is bot image
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

//isClicked() - checks if door is already opened
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

//playDoor() - controls game functionality 
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

//randomChoreDoorGenerator() - assigns random open door images
let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

//doorx.onclick() - changes door image on click interaction
door1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)){
	doorImage1.src = openDoor1;
	playDoor(door1);
  }
}
door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2)){
	doorImage2.src = openDoor2;
  	playDoor(door2);
  }
}
door3.onclick = () => {
  if(currentlyPlaying && !isClicked(door3)){
	doorImage3.src = openDoor3;
  	playDoor(door3);
  }
}

//startRound() - starts or resets the game
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

//startButton.onclick() - resets game once game is over
 startButton.onclick = () => {
  if(!currentlyPlaying){
    startRound();
  }
}

//gameOver() - checks if player has won or lost
const gameOver = (str) => {
  if (str === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
 currentlyPlaying = false;
}

startRound(); //intialize game
