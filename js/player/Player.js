import Piece from '../pieces/Piece';
import chalk from 'chalk';

export default class Player {
    // players have a set of game pieces. This class needs to keep track of them
    constructor() {
        this.pieces = [];
    }

    /**
     * takes an array of Piece instances and appends them to this.pieces to prove ownership
     */
    load() {
        for (let i = 0; i < arguments.length; ++i) {
            let piece = arguments[i];
            if (piece instanceof Piece) {
                this.pieces.push(arguments[i]);
            }
        };

        console.log("pieces:", this.pieces);
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