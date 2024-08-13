import Gameboard from './classes/Gameboard';
import Player from './classes/Player';
import Ship from './classes/Ship';

function boardSetup() {
    const board = document.querySelector('.board');

    for (let i=0; i<100; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
    }
}

function addShip() {

}

export {boardSetup};