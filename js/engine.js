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
import Player from './player/Player';

let player1 = new Player("Player 1"); // TODO replace logic using player name with cuid
let player2 = new Player("Player 2");

let marshal = new Marshal();
let general = new General();
let colonel1 = new Colonel();
let colonel2 = new Colonel();
let major1 = new Major();
let major2= new Major();
let major3 = new Major();
let captain1 = new Captain();
let captain2 = new Captain();
let captain3 = new Captain();
let captain4 = new Captain();
let lieutenant1 = new Lieutenant();
let lieutenant2 = new Lieutenant();
let lieutenant3 = new Lieutenant();
let lieutenant4 = new Lieutenant();
let sergeant1 = new Sergeant();
let sergeant2 = new Sergeant();
let sergeant3 = new Sergeant();
let sergeant4 = new Sergeant();
let sergeant5 = new Sergeant();
let miner1 = new Miner();
let miner2 = new Miner();
let miner3 = new Miner();
let miner4 = new Miner();
let miner5 = new Miner();
let scout1 = new Scout();
let scout2 = new Scout();
let scout3 = new Scout();
let scout4 = new Scout();
let scout5 = new Scout();
let scout6 = new Scout();
let bomb1 = new Bomb();
let bomb2 = new Bomb();
let bomb3 = new Bomb();
let bomb4 = new Bomb();
let bomb5 = new Bomb();
let bomb6 = new Bomb();
let flag = new Flag();
let spy = new Spy();

//player1.load(marshal, bomb, captain, colonel, flag, general, lieutenant, major, miner, scout, sergeant, spy);
player1.load(marshal, general, colonel1, colonel2, major1, major2, major3,
    lieutenant1, lieutenant2, lieutenant3, lieutenant4, sergeant1, sergeant2, sergeant3, sergeant4, sergeant5,
    miner1, miner2, miner3, miner4, miner5,
    scout1, scout2, scout3, scout4, scout5, scout6,
    bomb1, bomb2, bomb3, bomb4, bomb5, bomb6, flag, spy
);
player1.setColor('red');

let marshal2 = new Marshal();
let general2 = new General();
let colonel2_1 = new Colonel();
let colonel2_2 = new Colonel();
let major2_1 = new Major();
let major2_2= new Major();
let major2_3 = new Major();
let captain2_1 = new Captain();
let captain2_2 = new Captain();
let captain2_3 = new Captain();
let captain2_4 = new Captain();
let lieutenant2_1 = new Lieutenant();
let lieutenant2_2 = new Lieutenant();
let lieutenant2_3 = new Lieutenant();
let lieutenant2_4 = new Lieutenant();
let sergeant2_1 = new Sergeant();
let sergeant2_2 = new Sergeant();
let sergeant2_3 = new Sergeant();
let sergeant2_4 = new Sergeant();
let sergeant2_5 = new Sergeant();
let miner2_1 = new Miner();
let miner2_2 = new Miner();
let miner2_3 = new Miner();
let miner2_4 = new Miner();
let miner2_5 = new Miner();
let scout2_1 = new Scout();
let scout2_2 = new Scout();
let scout2_3 = new Scout();
let scout2_4 = new Scout();
let scout2_5 = new Scout();
let scout2_6 = new Scout();
let bomb2_1 = new Bomb();
let bomb2_2 = new Bomb();
let bomb2_3 = new Bomb();
let bomb2_4 = new Bomb();
let bomb2_5 = new Bomb();
let bomb2_6 = new Bomb();
let flag2 = new Flag();
let spy2 = new Spy();

player2.load(marshal2, general2, colonel2_1, colonel2_2, major2_1, major2_2, major2_3,
    lieutenant2_1, lieutenant2_2, lieutenant2_3, lieutenant2_4, sergeant2_1, sergeant2_2, sergeant2_3, sergeant2_4, sergeant2_5,
    miner2_1, miner2_2, miner2_3, miner2_4, miner2_5,
    scout2_1, scout2_2, scout2_3, scout2_4, scout2_5, scout2_6,
    bomb2_1, bomb2_2, bomb2_3, bomb2_4, bomb2_5, bomb2_6, flag2, spy2
);
player2.setColor('blue');

let board = new Board();

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
player1.placeRandom(board, 'top');
player2.placeRandom(board, 'bot');
/*
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
board.load({ x: 0, y: 9 }, marshal2);
board.load({ x: 1, y: 9 }, scout2_4);
board.load({ x: 2, y: 9 }, flag2);
board.load({ x: 3, y: 9 }, bomb2_1);
board.load({ x: 4, y: 9 }, lieutenant2_4);
board.load({ x: 5, y: 9 }, miner2_1);
board.load({ x: 6, y: 9 }, general2);
board.load({ x: 7, y: 9 }, sergeant2_3);
board.load({ x: 8, y: 9 }, bomb2_5);
board.load({ x: 9, y: 9 }, major2_3);

board.load({ x: 0, y: 8 }, colonel2_1);
board.load({ x: 1, y: 8 }, scout2_3);
board.load({ x: 2, y: 8 }, major2_1);
board.load({ x: 3, y: 8 }, bomb2_6);
board.load({ x: 4, y: 8 }, lieutenant2_2);
board.load({ x: 5, y: 8 }, miner2_2);
board.load({ x: 6, y: 8 }, lieutenant2_3);
board.load({ x: 7, y: 8 }, scout2_1);
board.load({ x: 8, y: 8 }, scout2_2);
board.load({ x: 9, y: 8 }, sergeant2_2);
*/

function ask() {
    prompt.get(['move'], function(err, result) {
        console.log('Performing: ' + result.move);
        let command = result.move;

        if (command === 'exit') {
            console.log('Closing game.');
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

