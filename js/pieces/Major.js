import Piece from './Piece';
import { MAJOR } from './Ranks';

class Major extends Piece {
    constructor() {
        super(MAJOR, 'Major');
    }
}

export default Major;