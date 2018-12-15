import Piece from './Piece';
import { MAYOR } from './Ranks';

class Major extends Piece {
    constructor() {
        super(MAYOR, 'Major');
    }
}

export default Major;