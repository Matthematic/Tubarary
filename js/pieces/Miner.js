import Piece from './Piece';

class Miner extends Piece {
    constructor() {
        super(3, 'Miner');
    }

    // logic for determining how this piece is able to move
    isValidMove(square) {

    }

    // logic for determining what happens when this piece attacks.
    // under normal circumstances it's just rank based, but the Spy and Miner have
    // special rules
    attack(piece) {

    }
}

export default Miner;