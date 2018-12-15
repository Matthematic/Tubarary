'use strict';

var _Marshal = require('./pieces/Marshal');

var _Marshal2 = _interopRequireDefault(_Marshal);

var _Bomb = require('./pieces/Bomb');

var _Bomb2 = _interopRequireDefault(_Bomb);

var _Captain = require('./pieces/Captain');

var _Captain2 = _interopRequireDefault(_Captain);

var _Colonel = require('./pieces/Colonel');

var _Colonel2 = _interopRequireDefault(_Colonel);

var _Flag = require('./pieces/Flag');

var _Flag2 = _interopRequireDefault(_Flag);

var _General = require('./pieces/General');

var _General2 = _interopRequireDefault(_General);

var _Lieutenant = require('./pieces/Lieutenant');

var _Lieutenant2 = _interopRequireDefault(_Lieutenant);

var _Major = require('./pieces/Major');

var _Major2 = _interopRequireDefault(_Major);

var _Miner = require('./pieces/Miner');

var _Miner2 = _interopRequireDefault(_Miner);

var _Scout = require('./pieces/Scout');

var _Scout2 = _interopRequireDefault(_Scout);

var _Sergeant = require('./pieces/Sergeant');

var _Sergeant2 = _interopRequireDefault(_Sergeant);

var _Spy = require('./pieces/Spy');

var _Spy2 = _interopRequireDefault(_Spy);

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _Board = require('./board/Board');

var _Board2 = _interopRequireDefault(_Board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var marshal = new _Marshal2.default();
var bomb = new _Bomb2.default();
var captain = new _Captain2.default();
var colonel = new _Colonel2.default();
var flag = new _Flag2.default();
var general = new _General2.default();
var lieutenant = new _Lieutenant2.default();
var major = new _Major2.default();
var miner = new _Miner2.default();
var scout = new _Scout2.default();
var sergeant = new _Sergeant2.default();
var spy = new _Spy2.default();

var board = new _Board2.default();

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

var Alphabet = {
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
    j: 9

    // player 1
};board.load({ x: 0, y: 0 }, marshal);
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
    _prompt2.default.get(['move'], function (err, result) {
        console.log('Performing: ' + result.move);
        var command = result.move;

        if (command === 'exit') {
            console.log('Closing game.');
            exitCondition = true;
        } else {
            var split = command.split(' ');
            console.log(split);
            var from = split[0]; // A1
            var to = split[1]; // B2

            var fromCoord = { x: Alphabet[from.split('')[0]], y: parseInt(from.substr(1), 10) - 1 };
            var toCoord = { x: Alphabet[to.split('')[0]], y: parseInt(to.substr(1), 10) - 1 };

            console.log(fromCoord, toCoord);
            board.move(fromCoord, toCoord);
            console.log(board.printNames());

            ask();
        }
    });
}

console.log(board.printNames());
ask();