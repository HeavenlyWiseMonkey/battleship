import Gameboard from "./Gameboard";

class Player {
    constructor(owner) {
        this.owner = owner;
        this.gameboard = new Gameboard();
    }
}

export default Player;