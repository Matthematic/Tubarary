import Piece from '../pieces/Piece';
import chalk from 'chalk';

export default class Player {
    // players have a set of game pieces. This class needs to keep track of them
    constructor(name) {
        this.name = name;
        this.pieces = [];
    }

    getName() {
        return this.name;
    }

    /**
     * takes an array of Piece instances and appends them to this.pieces to prove ownership
     */
    load() {
        for (let i = 0; i < arguments.length; ++i) {
            let piece = arguments[i];
            if (piece instanceof Piece) {
                if (arguments[i].registerPlayer(this.name)) {
                    this.pieces.push(arguments[i]);
                }
            }
        };

        console.log("pieces:", this.pieces);
    }

    /**
     * Places this players' pieces on the board in random order
     * @param {Board} board the board instance
     * @param {string} side the side of the board to load on
     */
    placeRandom(board, side) {
        if (side === 'top') {
            let startX = 0;
            let startY = 0;
            let counter = 0;
            const boardArr = board.getBoard();
            for (let y = startY; y < boardArr.length; ++y) {
                for (let x = startX; x < boardArr[y].length; ++x) {
                    if (!this.pieces[counter]) {
                        break;
                    }
                    board.load({ x, y }, this.pieces[counter]);
                    counter++;
                }
            }

            console.log(board.getBoard());
            return true;
        }
        else if (side === 'bot') {
            const boardArr = board.getBoard();
            let startX = boardArr.length-1;
            let startY = boardArr[0].length-1;
            let counter = 0;
            for (let y = startY; y >= 0; --y) {
                for (let x = startX; x >= 0; --x) {
                    if (!this.pieces[counter]) {
                        break;
                    }
                    board.load({ x, y }, this.pieces[counter]);
                    counter++;
                }
            }
            console.log(board.getBoard());
            return true;
        }
        else {
            console.error("Invalid 'side' argument supplied to place(). Must be either 'top' or 'bot'");
            return false;
        }
    }

    /**
     * colors the pieces for console output using chalk
     * @param {string} color either 'red' or 'blue'
     */
    setColor(color) {
        if (color == 'red') {
            this.pieces.forEach(piece => piece.setOutputName(chalk.bold.red(piece.getName())));
        }
        else if (color == 'blue') {
            this.pieces.forEach(piece => piece.setOutputName(chalk.bold.blue(piece.getName())));
        }
    }
}