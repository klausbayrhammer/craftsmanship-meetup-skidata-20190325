module.exports = board => {
    return threeInRow(board) || threeInColumn(board) || threeDiagonal(board);
};

function threeInRow(board) {
    const winner = board.find(sameInRow);
    return winner && winner[0];
}

function sameInRow([a, b, c]) {
    return a === b && b === c && a;
}

function threeInColumn(board) {
    const winningColumn = [0, 1, 2].find(columnIndex => sameInColumn(columnIndex, board));
    return  winningColumn !== undefined && board[0][winningColumn];
}

function sameInColumn (columnIndex, board) {
    return board[0][columnIndex] === board[1][columnIndex] && board[1][columnIndex] === board[2][columnIndex];
}

function threeDiagonal(board) {
    const leftTopToRightBottom = board[0][0] === board[1][1] && board[1][1] === board[2][2];
    const leftBottomToRightTop = board[2][0] === board[1][1] && board[1][1] === board[0][2];
    return (leftTopToRightBottom || leftBottomToRightTop) && board[1][1];
}
