import BoardPrinter from './BoardPrinter';

const O = { getRank: () => 0, getName: () => '     ' }; // placeholder for an empty spot in the board
const X = { getRank: () => 0, getName: () => 'terrain' }; // placeholder for the terrain where no pieces can ever go

export default class Board {
    constructor() {
        this.board = [
            [O, O, O, O, O, O, O, O, O, O],
            [O, O, O, O, O, O, O, O, O, O],
            [O, O, O, O, O, O, O, O, O, O],
            [O, O, O, O, O, O, O, O, O, O],
            [O, O, X, X, O, O, X, X, O, O],
            [O, O, X, X, O, O, X, X, O, O],
            [O, O, O, O, O, O, O, O, O, O],
            [O, O, O, O, O, O, O, O, O, O],
            [O, O, O, O, O, O, O, O, O, O],
            [O, O, O, O, O, O, O, O, O, O],
        ];
    }

    /**
     * Moves a piece from one spot to the other
     * @param {Object} coord1
     * @param {Object} coord2
     */
    move(coord1, coord2) {
        const pieceCoord2 = this.getPiece(coord2);
        const pieceCoord1 = this.getPiece(coord1);

        if (pieceCoord2.getRank() < pieceCoord1.getRank()) {
            if (this.load(coord2, pieceCoord1)) {
                this.load(coord1, O); // empty the coord we came from
            }
        }
        else if (pieceCoord1.getRank() < pieceCoord2.getRank()) {
            if (this.load(coord2, pieceCoord2)) {
                this.load(coord1, O); // empty the coord we came from
            }
        }
        else { // they are equal, destroy both
            this.load(coord2, O);
            this.load(coord1, O);
        }

    }

    getPiece(coord) {
        return this.board[coord.y][coord.x];
    }

    /**
     * Used during initial setup of armies, loads a piece at a particular coord
     * @param {Object} coord 
     * @param {Piece} piece 
     */
    load(coord, piece) {
        console.log("LOADING", piece, "AT", coord, this.board[coord.y][coord.x] );
        if (this.board[coord.y][coord.x] != X) {
            this.board[coord.y][coord.x] = piece;
            return true;
        }
        return false;
    }

    loadAll(newBoard) {
        this.board = newBoard;
    }

    getBoard() {
        return this.board;
    }

    printNames() {
        const printer = new BoardPrinter(this.board);
        return printer.printNames();
    }

    printRanks() {
        const printer = new BoardPrinter(this.board);
        return printer.printRanks();
    }
}