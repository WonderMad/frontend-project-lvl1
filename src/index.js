import * as readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');
const answer = () => readlineSync.question('Your answer: ');
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { askName, answer, getRandomInt };
