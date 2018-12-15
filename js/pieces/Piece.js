class Piece {
    constructor(rank=-5, name='', coordinate={}) {
        this.name = name;
        this.rank = rank;
        this.coord = coordinate;
    }

    getName() {
        return this.name;
    }

    getRank() {
        return this.rank;
    }

    getLocation() {
        return this.coord;
    }

    setLocation(coord) {
        this.coord = coord;
    }

    // logic for determining how this piece is able to move to this square legally. 
    // This does not determine if the square is empty or not. That check is made by the board manager
    isValidMove(square) {

    }

    // logic for determining what happens when this piece attacks.
    // under normal circumstances it's just rank based, but the Spy and Miner have
    // special rules
    attack(piece) {

    }
}

export default Piece;