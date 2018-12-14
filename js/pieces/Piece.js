class Piece {
    constructor(rank, name) {
        this.name = name;
        this.rank = rank;
        this.location = ''; // board location of this piece, maybe a Coordinate class?
    }

    getName() {
        return this.name;
    }

    getRank() {
        return this.rank;
    }

    getLocation() {
        return this.location;
    }

    setLocation(loc) {
        this.location = loc;
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