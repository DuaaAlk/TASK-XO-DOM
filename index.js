// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9

function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}

// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  confirm(`Horraaay, ${winner} wins!`);
  restartGame();
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

let clickedButtons =  ["","","","","","","","",""];
let currentPlayer = "O";
let blockClickedCounter = 0;


function clickButton(index) {
  
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  currentPlayer = checkPlayer(); // either X or O
  fillButton(index,currentPlayer);
  clickedButtons[index]= currentPlayer; 
  blockClickedCounter++;
  checkWinner(); 

  if (blockClickedCounter==9) 
    restartGame();

}

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer() {
  // ....
  (currentPlayer==="X") ? currentPlayer="O" : currentPlayer="X";
  return currentPlayer;
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
function checkWinner(){
  
  if ( clickedButtons[1]===currentPlayer&&clickedButtons[5]===currentPlayer&&clickedButtons[9]===currentPlayer )
    winningAlert(currentPlayer);
  else if ( clickedButtons[1]===currentPlayer&&clickedButtons[4]===currentPlayer&&clickedButtons[7]===currentPlayer )
    winningAlert(currentPlayer);
    else if ( clickedButtons[2]===currentPlayer&&clickedButtons[5]===currentPlayer&&clickedButtons[8]===currentPlayer )
      winningAlert(currentPlayer);
      else if ( clickedButtons[3]===currentPlayer&&clickedButtons[5]===currentPlayer&&clickedButtons[7]===currentPlayer )
        winningAlert(currentPlayer);
        else if ( clickedButtons[1]===currentPlayer&&clickedButtons[2]===currentPlayer&&clickedButtons[3]===currentPlayer )
          winningAlert(currentPlayer);
          else if ( clickedButtons[4]===currentPlayer&&clickedButtons[5]===currentPlayer&&clickedButtons[6]===currentPlayer )
            winningAlert(currentPlayer);
            else if ( clickedButtons[7]===currentPlayer&&clickedButtons[8]===currentPlayer&&clickedButtons[9]===currentPlayer )
              winningAlert(currentPlayer);
                else if ( clickedButtons[3]===currentPlayer&&clickedButtons[6]===currentPlayer&&clickedButtons[9]===currentPlayer )
                  winningAlert(currentPlayer)

}

function restartGame(){
  clickedButtons = [];
  currentPlayer = "O";
  blockClickedCounter = 0;
  let i = 1;
  while (i<10){
    fillButton(i," ");
    i++;
  }
  
}
