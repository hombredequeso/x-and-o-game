
const zip = (l1, l2) => l1.map(function(e, i) {return [e, l2[i]];});


const combine = (a ,b) => (a === b)? a : null;

// const matchPatterns = [
// ['x', 'x', 'x',null, null, null,null, null, null],
// ['o', 'o', 'o',null, null, null,null, null, null],

// [null, null, null,'x', 'x', 'x',null, null, null],
// [null, null, null,'o', 'o', 'o',null, null, null],

// [null, null, null,null, null, null,'x', 'x', 'x'],
// [null, null, null,null, null, null,'o', 'o', 'o'],

// ['x', null, null,'x', null, null,'x', null, null,],
// ['o', null, null,'o', null, null,'o', null, null,],

// [null, 'x', null, null,'x', null, null,'x', null],
// [null, 'o', null, null,'o', null, null,'o', null],

// [null, null, 'x', null, null,'x', null, null,'x'],
// [null, null, 'o', null, null,'o', null, null,'o'],

// ['x', null, null,null, 'x', null,null, null, 'x'],
// ['o', null, null,null, 'o', null,null, null, 'o'],

// [null, null, 'x',null, 'x', null,'x', null, null],
// [null, null, 'o',null, 'o', null,'o', null, null],
// ];


export const getWinner = (winningPatterns: string[][]) => (board: string[]) => {
    const winners = winningPatterns.map(win => {
        const winningPositions =  zip(board, win)
                    .map(x => combine(x[0],x[1]))
                    .filter(x => x !== null);

        return winningPositions.length === 3 ? winningPositions[0] : null;
    });

    return winners.find(x => x !== null)??null;
};


// Or generate the winning patterns using generalized patterns:

const generalPatterns = [
  // horizontal wins
['', '', '',null, null, null,null, null, null],
[null, null, null,'', '', '',null, null, null],
[null, null, null,null, null, null,'', '', ''],

  // vertical wins
['', null, null,'', null, null,'', null, null,],
[null, '', null, null,'', null, null,'', null],
[null, null, '', null, null,'', null, null,''],

  // diagonal wins
['', null, null,null, '', null,null, null, ''],
[null, null, '',null, '', null,'', null, null],
];

const listReplace = (list, a, b) =>
  list.map(x => (x == a)?b:x);

export const matchPatterns = 
  ['x','o']
  .flatMap((e) => generalPatterns.map(p => listReplace(p, '', e)));


