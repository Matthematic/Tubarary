class Piece {
    constructor(rank=-5, name='') {
        this.name = name;
        this.rank = rank;
        this.outputName = name;
    }

    getName() {
        return this.name;
    }

    getOutputName() {
        return this.outputName;
    }

    getRank() {
        return this.rank;
    }

    // logic for determining how this piece is able to move to this square legally. 
    // This does not determine if the square is empty or not. That check is made by the board manager
    isValidMove(coord1, coord2) {
        if ((Math.abs(coord2.x - coord1.x) + Math.abs(coord2.y - coord1.y)) == 1) {
            return true
        }
        return false;
    }

    setOutputName(name) {
        this.outputName = name;
    }

    // logic for determining what happens when this piece attacks.
    // under normal circumstances it's just rank based, but the Spy and Miner have
    // special rules
    attack(piece) {

    }
}

export default Piece;