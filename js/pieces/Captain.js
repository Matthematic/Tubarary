import Piece from './Piece';
import { CAPTAIN } from './Ranks';

class Captain extends Piece {
    constructor() {
        super(CAPTAIN, 'Captain');
    }
}

export default Captain;