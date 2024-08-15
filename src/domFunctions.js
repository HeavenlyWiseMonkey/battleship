import Gameboard from './classes/Gameboard';
import Player from './classes/Player';
import Ship from './classes/Ship';

// create squares for two boards
function boardSetup(player) {
    const playerBoard = document.querySelector('.player');
    const computerBoard = document.querySelector('.computer');

    // setup player board
    for (let j=0; j<100; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        playerBoard.appendChild(square);
    }
    // setup computer board
    for (let j=0; j<100; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => attack(square, player));
        computerBoard.appendChild(square);
    }
}

// make specific board get ship added
function addShip(ship, player, startX, endX, startY, endY) {
    const board = document.querySelector(`.${player.owner}`);
    player.gameboard.place(ship, startX, endX, startY, endY);
    const squares = board.children;
    for (let i=startX; i<endX; i++) {
        squares[i+startY*10].classList.add('ship');
    }
    for (let i=startY; i<endY; i++) {
        squares[i*10+startX].classList.add('ship');
    }
}

function attack(self, player) {
    // get index of square and update colour
    const board = self.parentElement;
    const index = Array.from(board.children).indexOf(self);
    if (player.gameboard.receiveAttack(Math.floor(index/10), index%10)) {
        self.classList.add('hit');
    }
    else {
        self.classList.add('miss');
    }
}

function changeTurn(self, player, computer) {
    attack(self, player, computer);
}

function computerAttack() {

}

function game() {
    const player = new Player('player');
    const computer = new Player('computer');

    boardSetup(computer);

    const destroyer = new Ship(2);
    const submarine = new Ship(3);
    const cruiser = new Ship(3);
    const battleship = new Ship(4);
    const carrier = new Ship(5);

    addShip(destroyer, player, 0, 2, 0, 0);
    addShip(submarine, player, 3, 3, 3, 6);
    addShip(cruiser, player, 5, 8, 0, 0);
    addShip(battleship, player, 2, 2, 0, 4);
    addShip(carrier, player, 5, 5, 4, 9);

    addShip(destroyer, computer, 5, 7, 0, 0);
    addShip(submarine, computer, 3, 3, 0, 3);
    addShip(cruiser, computer, 0, 3, 4, 4);
    addShip(battleship, computer, 1, 5, 7, 7);
    addShip(carrier, computer, 5, 10, 9, 9);
}

export {game};