import chalk from 'chalk';

export default class BoardPrinter {
    constructor(board) {
        this.board = board;
        this.alphabet = {
             0: 'A',
             1: 'B',
             2: 'C',
             3: 'D',
             4: 'E',
             5: 'F',
             6: 'G',
             7: 'H',
             8: 'I',
             9: 'J'
        };
    }

    printNames() {
        const longestChar = this.getLongestNameChar(this.board);
        console.log('LONGEST CHAR', longestChar);
        let accum = '\n';
        for (let y = 0; y < this.board.length; ++y) {
            let row = '';
            for (let x = 0; x < this.board[y].length; ++x) {
                let name = this.board[y][x].getName();
                let diffLongestChar = longestChar - name.length;
                let halfDiff = Math.ceil(diffLongestChar / 2);
                let halfDiffStr = " ".repeat(halfDiff);
                name = `${halfDiffStr}${this.board[y][x].getOutputName()}${halfDiffStr}`;
                row += ' | ' + name;
            }

            row += ' | ' + `${chalk.yellow(y+1)}` + '\n ' + "-".repeat(this.board[0].length * (longestChar + 3)) + '\n';
            accum += row;
        }

        let diffLongestChar = longestChar - 1; // letters are 1 char
        let halfDiff = Math.ceil((diffLongestChar) / 2) + 1;
        let halfDiffStr = " ".repeat(halfDiff);
        let alphabetLabels = '  ';

        for (let i = 0; i < this.board[0].length; ++i) {
            alphabetLabels += halfDiffStr + ' ' + this.alphabet[i] + halfDiffStr;
        }

        return chalk.yellow(alphabetLabels) + '\n' + accum + '\n';
    }

    printRanks() {
        const longestChar = this.getLongestRankChar(this.board);
        let rowLength = 0;
        let accum = '\n';
        for (let y = 0; y < this.board.length; ++y) {
            let row = '';
            for (let x = 0; x < this.board[y].length; ++x) {
                let name = this.board[y][x].getRank();
                let diffLongestChar = longestChar - name.length;
                for (let i = 0; i < diffLongestChar; ++i) {
                    name += ' ';
                }
                row += ' ' + name + ' ';
            }
            row += '\n';
            accum += row;
        }

        return chalk.blue(accum) + '\n';
    }

    getLongestNameChar(board) {
        let accum = 0;
        for (let y = 0; y < this.board.length; ++y) {
            for (let x = 0; x < this.board[y].length; ++x) {
                accum = Math.max(accum, this.board[y][x].getName().length);
            }
        }
        return accum;
    }

    getLongestRankChar(board) {
        let accum = 0;
        for (let y = 0; y < this.board.length; ++y) {
            for (let x = 0; x < this.board[y].length; ++x) {
                accum = Math.max(accum, this.board[y][x].getRank().length);
            }
        }
        return accum;
    }
}