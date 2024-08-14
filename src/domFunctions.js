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
            board.appendChild(square);
        }
    })
}

// make specific board get ship added
function addShip(startX, endX, startY, endY, owner) {
    const board = document.querySelector(`.${owner}`);
    console.log(board);
    const squares = board.children;
    for (let i=startX; i<endX; i++) {
        squares[i].classList.add('ship');
    }
    for (let i=startY; i<endY; i++) {
        squares[i*10+startX].classList.add('ship');
    }
}

export {boardSetup, addShip};