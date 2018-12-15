import Piece from './Piece';
import { SERGEANT } from './Ranks';

class Sergeant extends Piece {
    constructor() {
        super(SERGEANT, 'Sergeant');
    }
}

export default Sergeant;