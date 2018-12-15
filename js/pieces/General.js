import Piece from './Piece';
import { GENERAL } from './Ranks';

class General extends Piece {
    constructor() {
        super(GENERAL, 'General');
    }
}

export default General;