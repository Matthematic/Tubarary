import Piece from './Piece';
import { MINER } from './Ranks';

class Miner extends Piece {
    constructor() {
        super(MINER, 'Miner');
    }

    // logic for determining what happens when this piece attacks.
    // under normal circumstances it's just rank based, but the Spy and Miner have
    // special rules
    attack(piece) {

    }
}

export default Miner;