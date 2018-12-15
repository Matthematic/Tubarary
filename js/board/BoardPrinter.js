export default class BoardPrinter {
    constructor(board) {
        this.board = board;
    }

    printNames() {
        const longestChar = this.getLongestNameChar(this.board);
        let accum = '\n';
        for (let y = 0; y < this.board.length; ++y) {
            let row = '';
            for (let x = 0; x < this.board[y].length; ++x) {
                let name = this.board[y][x].getName();
                let diffLongestChar = longestChar - name.length;
                let halfDiff = Math.ceil(diffLongestChar / 2);
                let halfDiffStr = " ".repeat(halfDiff);
                name = halfDiffStr + name + halfDiffStr;
                row += ' | ' + name;
            }

            row += ' |\n ' + "-".repeat(row.length+1) + '\n';
            accum += row;
        }

        return accum + '\n';
    }

    printRanks() {
        const longestChar = this.getLongestRankChar(this.board);
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

        return accum + '\n';
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