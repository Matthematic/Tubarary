import Piece from './Piece';
import { COLONEL } from './Ranks';

class Colonel extends Piece {
    constructor() {
        super(COLONEL, 'Colonel');
    }
}

export default Colonel;