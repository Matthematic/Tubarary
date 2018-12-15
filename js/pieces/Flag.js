import Piece from './Piece';
import { FLAG } from './Ranks';

class Flag extends Piece {
    constructor() {
        super(FLAG, 'flag ');
    }
}

export default Flag;