/**
 * Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.

    Create a Tic-Tac-Toe game grid using your HTML element of choice.
    When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
    A heading should say whether it is X's or O's turn and change with each move made.
    A button should be available to clear the grid and restart the game.
    When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear 
    across the screen announcing the winner.

    I need:
    A tic-tac-toe game board (3 x #)
    X or O on click
    Button to clear the board & play again
    A Bootstrap alert declaring the winner at the end of the game 

    Rules:
    3 x 3 grid
    you want 3 in a row to win
    2 players take turns
 */

let box0 = ${'#box0'};
let box1 = ${'#box1'};
let box2 = ${'#box2'};
let box3 = ${'#box3'};
let box4 = ${'#box4'};
let box5 = ${'#box5'};
let box6 = ${'#box6'};
let box7 = ${'#box7'};
let box8 = ${'#box8'};

// Is X or O being played this turn?
let player1 = "X";
let player2 = "O";

// Winner at 5+ turns, but can't go above 9 turns
let turn = 0;

// Who won so we can move to the next round?
let winner = false;

$('#alertStart').hide();
$('#alertWinner').hide();
$('#alertDraw').hide();

const winningOutcomes = [
   [box0, box1, box2], [box3, box4, box5], [box6, box7, box8]
   [box0, box3, box6], [box1, box4, box7], [box2, box5, box8]
   [box0, box4, box8], [box2, box4, box6],
];

// Keep score
let currentPlayer = '';

const startGame = () => {
   
   console.log("Start Game!");
   console(turn++);
   currentPlayer = player1;
   console.log(currentPlayer);

   //Start alert shows up here!
   ${'#alertStart'}.show();

}

document.getElementById('startBtn').addEventListener('click', ( => startGame()));