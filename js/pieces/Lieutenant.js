import Piece from './Piece';
import { LIEUTENANT } from './Ranks';

class Lieutenant extends Piece {
    constructor() {
        super(LIEUTENANT, 'Lieutenant ');
    }
}

export default Lieutenant;