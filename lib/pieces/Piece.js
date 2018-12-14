'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function () {
    function Piece(rank, name) {
        _classCallCheck(this, Piece);

        this.name = name;
        this.rank = rank;
        this.location = ''; // board location of this piece, maybe a Coordinate class?
    }

    _createClass(Piece, [{
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getRank',
        value: function getRank() {
            return this.rank;
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            return this.location;
        }
    }, {
        key: 'setLocation',
        value: function setLocation(loc) {
            this.location = loc;
        }

        // logic for determining how this piece is able to move to this square legally. 
        // This does not determine if the square is empty or not. That check is made by the board manager

    }, {
        key: 'isValidMove',
        value: function isValidMove(square) {}

        // logic for determining what happens when this piece attacks.
        // under normal circumstances it's just rank based, but the Spy and Miner have
        // special rules

    }, {
        key: 'attack',
        value: function attack(piece) {}
    }]);

    return Piece;
}();

exports.default = Piece;