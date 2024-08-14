import * as css from "./index.css";

import Gameboard from './classes/Gameboard';
import Player from './classes/Player';
import Ship from './classes/Ship';
import {boardSetup, addShip} from './domFunctions.js';

const destroyer = new Ship(2);
const submarine = new Ship(3);
const cruiser = new Ship(3);
const battleship = new Ship(4);
const carrier = new Ship(5);

const player = new Player();
const computer = new Player();

boardSetup();

player.gameboard.place(destroyer, 0, 2, 0, 0);
addShip(0, 2, 0, 0, 'player');
player.gameboard.place(submarine, 3, 3, 3, 6);
addShip(3, 3, 3, 6, 'player');
player.gameboard.place(cruiser, 5, 8, 0, 0);
addShip(5, 8, 0, 0, 'player');
player.gameboard.place(battleship, 2, 2, 0, 4,);
addShip(2, 2, 0, 4, 'player');
player.gameboard.place(carrier, 5, 5, 4, 9);
addShip(5, 5, 4, 9, 'player');

computer.gameboard.place(destroyer, 5, 7, 0, 0);
addShip(5, 7, 0, 0, 'computer');

