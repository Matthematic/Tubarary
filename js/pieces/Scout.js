import Piece from './Piece';
import { SCOUT } from './Ranks';

class Scout extends Piece {
    constructor() {
        super(SCOUT, 'Scout');
    }
}

export default Scout;