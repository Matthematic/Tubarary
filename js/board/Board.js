import BoardPrinter from './BoardPrinter';
import chalk from 'chalk';
import { FLAG } from '../pieces/Ranks';

const O = { getRank: () => 0, getPlayer: () => 'empty', getOutputName: () => '     ', getName: () => '     ', isValidMove: () => {}  }; // placeholder for an empty spot in the board
const X = { getRank: () => 0, getPlayer: () => 'terrain', getOutputName: () => chalk.bgBlueBright('terrain'), getName: () => 'terrain', isValidMove: () => {} }; // placeholder for the terrain where no pieces can ever go

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

        console.log("coord1", coord1, "coord2", coord2);
        const pieceCoord2 = this.getPiece(coord2);
        const pieceCoord1 = this.getPiece(coord1);
        console.log("pieceCoord2", pieceCoord2);

        if (pieceCoord1 && pieceCoord2 && pieceCoord1.isValidMove(coord1, coord2)) { // if this is a valid move for the piece
            if (pieceCoord1.getPlayer() !== pieceCoord2.getPlayer()) { // if it's not the same player

                if (pieceCoord2.getRank() === FLAG) {
                    console.log("GAME OVER", pieceCoord1.getPlayer(), "WINS!");
                    process.exit();
                }
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
            else {
                console.error("YOU ARE ATTACKING YOUR OWN PIECE");
            }
        }
        else {
            console.log("INVALID MOVE");
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
        //console.log("LOADING", piece, "AT", coord, this.board[coord.y][coord.x] );
        if (this.board[coord.y][coord.x] != X) {
            this.board[coord.y][coord.x] = piece;
            //console.log("SETTING COORD TO ", coord);
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