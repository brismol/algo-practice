function boggleBoard(board, words) {
  const results = new Set();

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      for (const word of words) {
        const inProgress = new Set();
        if (explore(board, word, 0, inProgress, r, c)) {
          results.add(word);
        }
      }
    }
  }

  return [...results];
}

const explore = (board, word, wordIdx, inProgress, row, col) => {
  const pos = row + ',' + col;
  if (wordIdx >= word.length) return true;

  if (inProgress.has(pos)) return false;

  if (board[row][col] !== word[wordIdx]) return false;

  inProgress.add(pos);

  const neighbors = findNeighbors(row, col, board);

  for (const [r, c] of neighbors) {
    if (explore(board, word, wordIdx + 1, inProgress, r, c)) {
      return true;
    }
  }

  inProgress.delete(pos);
  return false;
};

const findNeighbors = (row, col, board) => {
  const neighbors = [];
  if (row - 1 >= 0) neighbors.push([row - 1, col]);
  if (row + 1 < board.length) neighbors.push([row + 1, col]);
  if (col - 1 >= 0) neighbors.push([row, col - 1]);
  if (col + 1 < board[row].length) neighbors.push([row, col + 1]);

  if (row - 1 >= 0 && col - 1 >= 0) neighbors.push([row - 1, col - 1]);
  if (row - 1 >= 0 && col + 1 < board[row].length)
    neighbors.push([row - 1, col + 1]);
  if (row + 1 < board.length && col - 1 >= 0)
    neighbors.push([row + 1, col - 1]);
  if (row + 1 < board.length && col + 1 < board[row].length)
    neighbors.push([row + 1, col + 1]);

  return neighbors;
};
