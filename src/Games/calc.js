import { cons, car, cdr } from '@hexlet/pairs';
import getRandomInt from '../utils';
import game from '..';


const generateResultAndOperator = (num1, num2) => {
  const resultsAndOperators = [cons('+', num1 + num2), cons('-', num1 - num2), cons('*', num1 * num2)];
  const lastValues = resultsAndOperators.length - 1;
  const getRandomValue = getRandomInt(0, lastValues);
  const randomOperator = car(resultsAndOperators[getRandomValue]);
  const randomResult = cdr(resultsAndOperators[getRandomValue]);
  return [randomOperator, randomResult];
};

const makeBrainCalcData = () => {
  const gameIntro = 'What is the result of the expression?';
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const values = generateResultAndOperator(num1, num2);
  const operator = values[0];
  const question = `${num1} ${operator} ${num2}`;
  const result = values[1].toString();
  return [gameIntro, question, result];
};


const startGame = () => game(makeBrainCalcData);

export default startGame;
