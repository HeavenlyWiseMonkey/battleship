import Ship from './Ship';

class Gameboard {
    constructor() {
        this.ships = 5;
        this.state = [];
        this.init();
    }
    init() { 
        let row = [];
        for (let i=0; i<10; i++) {
            for (let j=0; j<10; j++) {
                row.push(null);
            }
            this.state.push(row);
            row = [];
        }
    }
    place(ship, startX, endX, startY, endY) {
        // horizontal
        for (let i=startX; i<endX; i++) {
            this.state[startY][i] = ship;
        }
        // vertical
        for (let i=startY; i<endY; i++) {
            this.state[i][startX] = ship;
        }
    }
    receiveAttack(x, y) {
        if (this.state[x][y] && typeof this.state[x][y] === 'object') {
            let position = 0;
            // horizontal
            if (x>0 && this.state[x-1][y]) {
                let i = 1;
                while (x-i>=0 && this.state[x-i][y]) {
                    position++;
                    i++;
                }
            }
            // vertical
            if (y>0 && this.state[x][y-1]) {
                let i = 1;
                while (y-i>=0 && this.state[x][y-i]) {
                    position++;
                    i++;
                }
            }
            this.state[x][y].hit(position);
            return true;
        }
        this.state[x][y] = true;
        return false;
    }
    outcome(x, y) {
        if (typeof this.state[x][y] === 'object' && this.state[x][y] !== true && this.state[x][y].isSunk()) {
            this.ships--;
        }
        if (this.ships===0) {
            return true;
        }
    }
}

export default Gameboard;