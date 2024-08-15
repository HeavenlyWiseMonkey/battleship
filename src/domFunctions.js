import Gameboard from './classes/Gameboard';
import Player from './classes/Player';
import Ship from './classes/Ship';

// create squares for two boards
function boardSetup() {
    const boards = document.querySelectorAll('.board');

    boards.forEach((board) => {
        for (let i=0; i<100; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', attack);
            board.appendChild(square);
        }
    })
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

// function attack() {
//     // get index of square and update colour
//     const player = this.parentElement;
//     const index = Array.from(player.children).indexOf(this);
//     if (receiveAttack(Math.floor(index/10), index%10)) {
//         this.classList.addEventListener('hit');
//     }
//     else {
//         this.classList.addEventListener('miss');
//     }
// }

export {boardSetup, addShip};