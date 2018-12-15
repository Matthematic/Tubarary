import Piece from './Piece';
import { BOMB } from './Ranks';

class Bomb extends Piece {
    constructor() {
        super(BOMB, 'Bomb ');
    }
}

export default Bomb;