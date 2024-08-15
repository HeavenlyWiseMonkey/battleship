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

const player = new Player('player');
const computer = new Player('computer');

boardSetup();

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

