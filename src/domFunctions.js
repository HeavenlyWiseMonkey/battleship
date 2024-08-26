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
                const start = index-ship.hits[ship.hits.length-1]*10;
                const end = index+(ship.hits.length-ship.hits[ship.hits.length-1])*10;
                for (let i=start; i<end; i+=10) {
                    squares[i].classList.add('sunk');
                }
            }
        }
        if (!player.gameboard.ships) {
            setWinnerText(player);
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
    const squares = Array.from(document.querySelector('.player').children);
    let hitSquare;
    for (let i=0; i<squares.length; i++) {
        if (squares[i].classList.contains('hit') && !squares[i].classList.contains('sunk')) {
            hitSquare = squares[i];
            break;
        }
    }
    if (hitSquare) {
        const index = squares.indexOf(hitSquare);
        let checkUp = index-10>=0;
        let checkDown = index+10<100;
        let checkLeft = index-1>=0 && Math.floor((index-1)/10)===Math.floor(index/10);
        let checkRight = index+1<100 && Math.floor((index+1)/10)===Math.floor(index/10);
        let point = 10;
        // if there are any hit squares above or below
        if (checkUp && squares[index-10].classList.contains('hit') || checkDown && squares[index+10].classList.contains('hit')) {
            while (checkUp && squares[index-point].classList.contains('hit')) {
                point+=10;
                checkUp = index-10>=0;
            }
            if (checkUp && !squares[index-point].classList.contains('miss')) {
                console.log('up algorithm');
                attack(squares[index-point], player);
                return;
            }
            point = 10;
            while (checkDown && squares[index+point].classList.contains('hit')) {
                point+=10;
                checkDown = index+10<100;
            }
            if (checkDown && !squares[index+point].classList.contains('miss')) {
                console.log('down algorithm');
                attack(squares[index+point], player);
                return;
            }
        }
        // if there are any hit squares left or right
        else if (checkLeft && squares[index-1].classList.contains('hit') || checkRight && squares[index+1].classList.contains('hit')) {
            point = 1;
            while (checkLeft && squares[index-point].classList.contains('hit')) {
                point+=1;
                checkLeft = index-1>=0 && Math.floor((index-1)/10)===Math.floor(index/10);
            }
            if (checkLeft && !squares[index-point].classList.contains('miss')) {
                console.log('left algorithm');
                attack(squares[index-point], player);
                return;
            }
            point = 1;
            while (checkRight && squares[index+point].classList.contains('hit')) {
                point+=1;
                checkRight = index+1<100 && Math.floor((index+1)/10)===Math.floor(index/10);
            }
            if (checkRight && !squares[index+point].classList.contains('miss')) {
                console.log('right algorithm');
                attack(squares[index+point], player);
                return;
                }
            }
        // if the only hit square is itself
        // up
        if (checkUp && !(squares[index-10].classList.contains('hit') || squares[index-10].classList.contains('miss'))) {
            console.log('up');
            attack(squares[index-10], player);
            return;
        }
        // down
        else if (checkDown && !(squares[index+10].classList.contains('hit') || squares[index+10].classList.contains('miss'))) {
            console.log('down');
            attack(squares[index+10], player);
            return;
        }
        // left
        else if (checkLeft && !(squares[index-1].classList.contains('hit') || squares[index-1].classList.contains('miss'))) {
            console.log('left');
            attack(squares[index-1], player);
            return;
            }
        // right
        else if (checkRight && !(squares[index+1].classList.contains('hit') || squares[index+1].classList.contains('miss'))) {
            console.log('right');
            attack(squares[index+1], player);
            return;
        }
    }

    // otherwise attack random square
    let randomNumber = Math.floor(Math.random()*100);

    // stop duplicate attacks
    while (squares[randomNumber].classList.contains('hit') || squares[randomNumber].classList.contains('miss')) {
        randomNumber = Math.floor(Math.random()*100);
    }
    attack(squares[randomNumber], player);
}

function setWinnerText(player) {
    const winnerText = document.querySelector('.winner');
    if (player.owner==='computer') {
        winnerText.textContent = 'player wins';
    }
    else {
        winnerText.textContent = 'computer wins';
    }
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