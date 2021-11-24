"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_logic_1 = require("game-logic");
describe('getWinner', () => {
    test('return null when no winner', () => {
        const board = ['', '', '', '', '', '', '', '', '',];
        const result = (0, game_logic_1.getWinner)(game_logic_1.matchPatterns)(board);
        expect(result).toEqual(null);
    });
    test('return "x" when x wins across top row', () => {
        const board = ['x', 'x', 'x', '', '', '', '', '', '',];
        const result = (0, game_logic_1.getWinner)(game_logic_1.matchPatterns)(board);
        expect(result).toEqual('x');
    });
    test('return "o" when o wins across top row', () => {
        const board = ['o', 'o', 'o', '', '', '', '', '', '',];
        const result = (0, game_logic_1.getWinner)(game_logic_1.matchPatterns)(board);
        expect(result).toEqual('o');
    });
    test('return "x" when x wins vertically', () => {
        const board = ['x', '', '', 'x', '', '', 'x', '', '',];
        const result = (0, game_logic_1.getWinner)(game_logic_1.matchPatterns)(board);
        expect(result).toEqual('x');
    });
    test('return "x" when x wins diagonally', () => {
        const board = ['x', '', '', '', 'x', '', '', '', 'x'];
        const result = (0, game_logic_1.getWinner)(game_logic_1.matchPatterns)(board);
        expect(result).toEqual('x');
    });
});
