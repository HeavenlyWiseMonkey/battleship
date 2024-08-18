import Gameboard from './classes/Gameboard';
import Player from './classes/Player';
import Ship from './classes/Ship';

// create squares for two boards
function boardSetup(player, computer) {
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
        square.addEventListener('click', () => {
            if (!square.classList.contains('hit') && !square.classList.contains('miss')) {
                changeTurn(square, player, computer);
            }
        });
        computerBoard.appendChild(square);
    }
}

function addShip(ship, player, x, y, vertical) {
    // make specific board get ship added
    const board = document.querySelector(`.${player.owner}`);
    player.gameboard.place(ship, x, y, vertical);
    const squares = board.children;
    // horizontal
    if (!vertical) {
        for (let i=x; i<x+ship.length; i++) {
            squares[i+y*10].classList.add('ship');
        }
    }
    // vertical
    else {
        for (let i=y; i<y+ship.length; i++) {
            squares[i*10+x].classList.add('ship');
        }
    }
}

function attack(self, player) {
    // get index of square and update colour
    const board = self.parentElement;
    const index = Array.from(board.children).indexOf(self);
    const x = index%10;
    const y = Math.floor(index/10);
    if (player.gameboard.receiveAttack(x, y)) {
        self.classList.add('hit');
        const ship = player.gameboard.state[y][x];
        // sink all parts of the ship
        if (player.gameboard.outcome(x, y)) {
            const squares = board.children;
            // horizontal
            if (!ship.vertical) {
                const start = index-ship.hits[ship.hits.length-1];
                const end = index+ship.hits.length-ship.hits[ship.hits.length-1];
                for (let i=start; i<end; i++) {
                    squares[i].classList.add('sunk');
                }
            }
            // vertical
            else {
                // bug: missing attacks above ship moves sunk above ship
                const start = index-ship.hits[ship.hits.length-1]*10;
                const end = index+(ship.hits.length-ship.hits[ship.hits.length-1])*10;
                // console.log(index);
                // console.log(ship.hits[ship.hits.length-1]);
                // console.log(start);
                // console.log(end);
                for (let i=start; i<end; i+=10) {
                    squares[i].classList.add('sunk');
                }
            }
        }
    }
    else {
        self.classList.add('miss');
    }
}

function changeTurn(self, player, computer) {
    attack(self, computer);
    computerAttack(player);
}

function computerAttack(player) {
    // find any adjacent squares to attack
    const squares = document.querySelector('.player').children;
    // for (let i=0; i<squares.length; i++) {
    //     if (squares[i].classList.contains('hit')) {
            
    //     }
    // }
    // otherwise attack random square
    let randomNumber = Math.floor(Math.random()*100);

    // stop duplicate attacks
    while (squares[randomNumber].classList.contains('hit') || squares[randomNumber].classList.contains('miss')) {
        randomNumber = Math.floor(Math.random()*100);
    }
    attack(squares[randomNumber], player);
}

function game() {
    const player = new Player('player');
    const computer = new Player('computer');

    boardSetup(player, computer);

    // const destroyer = new Ship(2);
    // const submarine = new Ship(3);
    // const cruiser = new Ship(3);
    // const battleship = new Ship(4);
    // const carrier = new Ship(5);

    addShip(new Ship(2), player, 0, 0, false);
    addShip(new Ship(3), player, 3, 3, true);
    addShip(new Ship(3), player, 5, 0, false);
    addShip(new Ship(4), player, 2, 0, true);
    addShip(new Ship(5), player, 5, 4, true);

    addShip(new Ship(2), computer, 5, 0, false);
    addShip(new Ship(3), computer, 3, 2, true);
    addShip(new Ship(3), computer, 0, 4, false);
    addShip(new Ship(4), computer, 4, 4, true);
    addShip(new Ship(5), computer, 5, 9, false);
}

export {game};