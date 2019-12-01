import { cons, car, cdr } from '@hexlet/pairs';
import getRandomInt from '../utils';
import game from '..';

const operations = (num1, num2) => [cons('+', num1 + num2), cons('-', num1 - num2), cons('*', num1 * num2)];
const gameIntro = 'What is the result of the expression?';

const makeCalcQuestion = (getRandomValue, result) => { // Переназвать
  const randomOperator = car(result[getRandomValue]);
  const randomResult = cdr(result[getRandomValue]);
  return [randomOperator, randomResult];
};

const generateBrainCalcData = () => {
  const lastValues = operations.length - 1;
  const getRandomValue = getRandomInt(0, lastValues);
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const values = makeCalcQuestion(getRandomValue, operations(num1, num2));
  const operator = values[0];
  const question = `${num1} ${operator} ${num2}`;
  const result = values[1].toString();
  return [question, result];
};


const startGame = () => game(gameIntro, generateBrainCalcData);

export default startGame;
