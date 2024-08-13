import Ship from '../Ship'
import Gameboard from '../Gameboard'

const destroyer = new Ship(2);
const submarine = new Ship(3);
const cruiser = new Ship(3);
const battleship = new Ship(4);
const carrier = new Ship(5);

const gameboard = new Gameboard();

gameboard.place(destroyer, 0, 2, 0, 0);
gameboard.place(submarine, 3, 3, 3, 6);
gameboard.place(cruiser, 5, 8, 0, 0);
gameboard.place(battleship, 2, 2, 0, 4);
gameboard.place(carrier, 5, 5, 4, 9);

function gameOver() {
    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            gameboard.receiveAttack(i,j);
            if (gameboard.outcome(i,j)) {
                return true;
            }
        }
    }
}

// only works inside block
test('Receive attack hits', () => {
    expect(gameboard.receiveAttack(0, 0)).toBe(true);
});

test('Receive attack misses', () => {
    expect(gameboard.receiveAttack(1, 0)).toBe(false);
});

test('Gameover', () => {
    expect(gameOver()).toBe(true);
});