const expect = require('expect');
const whoIsWinner = require('../main/who-is-winner');

const createBoard = tokens => tokens.split('\n')
    .map(row =>
        row.split('')
            .map(cell => cell === " " ? undefined : cell)
    );

describe('who wins the game', function () {
    [
        {title: 'X should win with three in first row',                 board: 'XXX\n   \n   ', winner: 'X'},
        {title: 'X should win with three in second row',                board: '   \nXXX\n   ', winner: 'X'},
        {title: 'O should win with three in first row',                 board: 'OOO\n   \n   ', winner: 'O'},
        {title: 'O should win with three in third row',                 board: '   \n   \nOOO', winner: 'O'},
        {title: 'O should win with three in first column',              board: 'O  \nO  \nO  ', winner: 'O'},
        {title: 'O should win with three in second column',             board: 'XO \n O \n O ', winner: 'O'},
        {title: 'O should win with three diagonal starting top left',   board: 'O  \n O \n  O', winner: 'O'},
        {title: 'O should win with three diagonal starting top bottom', board: '  O\n O \nO  ', winner: 'O'},
    ].forEach(({title, board, winner}) => {
        it(title, () => expect(whoIsWinner(createBoard(board))).toEqual(winner));
    });
});