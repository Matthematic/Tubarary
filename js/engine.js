import Marshal from './pieces/Marshal';
import Bomb from './pieces/Bomb';
import Captain from './pieces/Captain';
import Colonel from './pieces/Colonel';
import Flag from './pieces/Flag';
import General from './pieces/General';
import Lieutenant from './pieces/Lieutenant';
import Major from './pieces/Major';
import Miner from './pieces/Miner';
import Scout from './pieces/Scout';
import Sergeant from './pieces/Sergeant';
import Spy from './pieces/Spy';
import prompt from 'prompt';
import Board from './board/Board';

let marshal = new Marshal();
let bomb = new Bomb();
let captain = new Captain();
let colonel = new Colonel();
let flag = new Flag();
let general = new General();
let lieutenant = new Lieutenant();
let major = new Major();
let miner = new Miner();
let scout = new Scout();
let sergeant = new Sergeant();
let spy = new Spy();

let board = new Board();

console.log(marshal.getName(), marshal.getRank());
console.log(general.getName(), general.getRank());
console.log(colonel.getName(), colonel.getRank());
console.log(major.getName(), major.getRank());
console.log(captain.getName(), captain.getRank());
console.log(lieutenant.getName(), lieutenant.getRank());
console.log(sergeant.getName(), sergeant.getRank());
console.log(miner.getName(), miner.getRank());
console.log(scout.getName(), scout.getRank());
console.log(spy.getName(), spy.getRank());
console.log(bomb.getName(), bomb.getRank());
console.log(flag.getName(), flag.getRank());

const Alphabet = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,

    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
}

// player 1
board.load({ x: 0, y: 0 }, marshal);
board.load({ x: 1, y: 0 }, scout);
board.load({ x: 2, y: 0 }, flag);
board.load({ x: 3, y: 0 }, bomb);
board.load({ x: 4, y: 0 }, lieutenant);
board.load({ x: 5, y: 0 }, miner);
board.load({ x: 6, y: 0 }, general);
board.load({ x: 7, y: 0 }, scout);
board.load({ x: 8, y: 0 }, scout);
board.load({ x: 9, y: 0 }, major);

// player 2
board.load({ x: 0, y: 9 }, marshal);
board.load({ x: 1, y: 9 }, scout);
board.load({ x: 2, y: 9 }, flag);
board.load({ x: 3, y: 9 }, bomb);
board.load({ x: 4, y: 9 }, lieutenant);
board.load({ x: 5, y: 9 }, miner);
board.load({ x: 6, y: 9 }, general);
board.load({ x: 7, y: 9 }, scout);
board.load({ x: 8, y: 9 }, scout);
board.load({ x: 9, y: 9 }, major);

function ask() {
    prompt.get(['move'], function(err, result) {
        console.log('Performing: ' + result.move);
        let command = result.move;

        if (command === 'exit') {
            console.log('Closing game.');
            exitCondition = true;
        } else {
            let split = command.split(' ');
            console.log(split);
            const from = split[0]; // A1
            const to = split[1]; // B2

            const fromCoord = { x: Alphabet[from.split('')[0]], y: parseInt(from.substr(1), 10)-1 };
            const toCoord = { x: Alphabet[to.split('')[0]], y: parseInt(to.substr(1), 10)-1 };

            console.log(fromCoord, toCoord);
            board.move(fromCoord, toCoord);
            console.log(board.printNames());

            ask();
        }
    });
}

console.log(board.printNames());
ask();

