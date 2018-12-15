'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Piece2 = require('./Piece');

var _Piece3 = _interopRequireDefault(_Piece2);

var _Ranks = require('./Ranks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Colonel = function (_Piece) {
    _inherits(Colonel, _Piece);

    function Colonel() {
        _classCallCheck(this, Colonel);

        return _possibleConstructorReturn(this, (Colonel.__proto__ || Object.getPrototypeOf(Colonel)).call(this, _Ranks.COLONEL, 'Colonel'));
    }

    return Colonel;
}(_Piece3.default);

exports.default = Colonel;