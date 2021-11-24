import {getWinner, matchPatterns} from '../game-logic'

describe('getWinner', () => {
  test('return null when no winner', () => {
    const board = ['', '', '','', '', '','', '', '',];
    const result = getWinner(matchPatterns)(board);

    expect(result).toEqual(null);
  });

  test('return "x" when x wins across top row', () => {
    const board = ['x', 'x', 'x','', '', '','', '', '',];
    const result = getWinner(matchPatterns)(board);

    expect(result).toEqual('x');
  });


  test('return "o" when o wins across top row', () => {
    const board = ['o', 'o', 'o','', '', '','', '', '',];
    const result = getWinner(matchPatterns)(board);

    expect(result).toEqual('o');
  });


  test('return "x" when x wins vertically', () => {
    const board = ['x', '', '','x', '', '','x', '', '',];
    const result = getWinner(matchPatterns)(board);

    expect(result).toEqual('x');
  });


  test('return "x" when x wins diagonally', () => {
    const board = ['x', '', '', '','x', '', '','','x'];
    const result = getWinner(matchPatterns)(board);

    expect(result).toEqual('x');
  });
})

