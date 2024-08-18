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
    place(ship, x, y, vertical) {
        // horizontal
        if (!vertical) {
            for (let i=x; i<x+ship.length; i++) {
                this.state[y][i] = ship;
            }
        }
        // vertical
        else {
            for (let i=y; i<y+ship.length; i++) {
                this.state[i][x] = ship;
                this.state[i][x].vertical = true;
            }
        }
    }
    receiveAttack(x, y) {
        // let a = this.state[x][y];
        // let b = this.state[x][y-1];
        // console.log(a);
        // console.log(b);
        if (typeof this.state[y][x] === 'object' && this.state[y][x] && this.state[y][x] !== true) {
            let position = 0;
            // horizontal
            if (y>0 && this.state[y-1][x]) {
                let i = 1;
                while (y-i>=0 && this.state[y-i][x]) {
                    position++;
                    i++;
                }
                // console.log('horizontal');
            }
            // vertical
            else if (x>0 && this.state[y][x-1] && !position) {
                let i = 1;
                while (x-i>=0 && this.state[y][x-i]) {
                    position++;
                    i++;
                }
                // console.log('vertical');
            }
            this.state[y][x].hit(position);
            return true;
        }
        this.state[y][x] = true;
        return false;
    }
    outcome(x, y) {
        if (typeof this.state[y][x] === 'object' && this.state[y][x] !== true && this.state[y][x].isSunk()) {
            this.ships--;
            return true;
        }
        return false;
    }
}

export default Gameboard;