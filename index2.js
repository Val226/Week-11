$(document).ready(function () {
  const cells = Array(9).fill(null);
  let currentPlayer = 'X';

  function updateTurnIndicator() {
    $('#turnIndicator').text(`Current Player: ${currentPlayer}`);
  }
  updateTurnIndicator();

  // Handle cell click
  $('.cell').on('click', function () {
      const index = $(this).data('index');
      if (!cells[index]) {
          cells[index] = currentPlayer;
          $(this).text(currentPlayer);

          if (checkWinner()) {
              setTimeout(() => alert(`${currentPlayer} wins!`), 100);
          } else if (cells.every(cell => cell)) {
              setTimeout(() => alert('It\'s a draw!'), 100);
          } else {
              currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
              updateTurnIndicator();
          }
      }
  });

  // Check for a winner
  function checkWinner() {
      const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6]            // Diagonals
      ];
      return winningCombinations.some(combination => {
          return combination.every(index => cells[index] === currentPlayer);
      });
  }

  // Reset the game
  function resetGame() {
      cells.fill(null);
      currentPlayer = 'X';
      $('.cell').text(''); // Clear the text in the cells
  }

  // Reset button functionality
  $('#resetGame').on('click', resetGame);
});
