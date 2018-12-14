'use strict';

var _engine = require('./engine');

var _engine2 = _interopRequireDefault(_engine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var x = new _engine2.default('test board');
console.log(x.getName());