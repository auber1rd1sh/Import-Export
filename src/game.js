import Character from './domain.js';

export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {

}

export function readGameSaving() {
  console.log('Reading game saving...');
}

export function writeGameSaving() {
  console.log('Writing game saving...');
}

