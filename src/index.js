import * as readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

export { askName };
