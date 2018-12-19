import Board from "../board/Board";

class Piece {
    constructor(rank=-5, name='', playerName='') {
        this.name = name;
        this.rank = rank;
        this.playerName = playerName;
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

    getPlayer() {
        return this.playerName;
    }

    registerPlayer(playerName) {
        if (!this.playerName.length) {
            console.log("ASSIGNING PLAYERNAME", playerName);
            this.playerName = playerName;
            return true;
        }
        console.error("PIECE IS ALREADY REGISTERED");
        return false;
    }

    // logic for determining how this piece is able to move to this square legally. 
    // This does not determine if the square is empty or not. That check is made by the board manager
    isValidMove(coord1, coord2) {
        if ((Math.abs(coord2.x - coord1.x) + Math.abs(coord2.y - coord1.y)) == 1) { // if the movement is valid
            return true;
        }
        else {
            console.error("MOVEMENT IS INVALID");
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