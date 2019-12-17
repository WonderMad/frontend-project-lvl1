import { cons, car, cdr } from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';

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
  const operation = cdr(operations[getRandomValue]);
  const operator = car(operations[getRandomValue]);
  let result = operation(num1, num2);
  const question = `${num1} ${operator} ${num2}`;
  result = result.toString();
  return [question, result];
};

const startGame = () => game(gameIntro, generateBrainCalcData);

export default startGame;
