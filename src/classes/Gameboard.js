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
        if (typeof this.state[y][x] === 'object' && this.state[y][x] && this.state[y][x] !== true) {
            let position = 0;
            // horizontal
            if (x>0 && this.state[y][x-1]===this.state[y][x] && !position) {
                let i = 1;
                while (x-i>=0 && this.state[y][x-i]===this.state[y][x]) {
                    position++;
                    i++;
                    }
            }
            // vertical
            else if (y>0 && this.state[y-1][x]===this.state[y][x]) {
                let i = 1;
                while (y-i>=0 && this.state[y-i][x]===this.state[y][x]) {
                    position++;
                    i++;
                }
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
    randomGeneration() {
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const cruiser = new Ship(3);
        const submarine = new Ship(3);
        const destroyer = new Ship(2);
        const ships = [carrier, battleship, cruiser, submarine, destroyer];
        let cur = 0;
        for (let i=0; i<ships.length; i++) {
            const vertical = Math.floor(Math.random() * 2);
            if (vertical) {
                let start = Math.floor(Math.random() * (100-(ships[cur].length-1)*10));
                let check = true;
                while (check) {
                    for (let j=0; j<ships[cur].length; j++) {
                        if (this.state[Math.floor(start/10)+j][start%10]) {
                            start = Math.floor(Math.random() * (100-(ships[cur].length-1)*10));
                            continue;
                        }
                    }
                    check = false;
                }
                this.place(ships[cur], start%10, Math.floor(start/10), vertical);
            }
            else {
                let start = Math.floor(Math.random() * 99);
                let check = true;
                first: while (check) {
                    if (Math.floor(start/10)!==Math.floor((start+ships[cur].length-1)/10)) {
                        start = Math.floor(Math.random() * 99);
                        continue;
                    }
                    for (let j=0; j<ships[cur].length; j++) {
                        if (this.state[Math.floor(start/10)][start%10+j]) {
                            start = Math.floor(Math.random() * 99);
                            continue first;
                        }
                    }
                    check = false;
                }
                this.place(ships[cur], start%10, Math.floor(start/10), vertical);
            }
            cur++;
        }     
    }
}

export default Gameboard;