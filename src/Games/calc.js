import { cons, car, cdr } from '@hexlet/pairs';
import getRandomInt from '../utils';
import game from '..';

const gameIntro = 'What is the result of the expression?';

const operations = [
  cons('+', (num1, num2) => num1 + num2),
  cons('-', (num1, num2) => num1 - num2),
  cons('*', (num1, num2) => num1 * num2),
];

const generateBrainCalcData = () => {
  const lastValue = operations.length - 1;
  const getRandomValue = getRandomInt(0, lastValue);
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const results = cdr(operations[getRandomValue]);
  const operator = car(operations[getRandomValue]);
  const result = results(num1, num2);
  const question = `${num1} ${operator} ${num2}`;
  const newResult = result.toString();
  return [question, newResult];
};


const startGame = () => game(gameIntro, generateBrainCalcData);

export default startGame;
