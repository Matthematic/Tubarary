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