import getRandomInt from '../index';
import game from '../game-engine';
import calcGame from '../Games/calc';


const questionExpression = (randomOperator, num1, num2) => {
  const operations = ['+', '-', '*'];
  const questionOperation = `${num1} ${operations[randomOperator]} ${num2}`;
  return questionOperation;
};


const calcData = () => {
  const randomOperator = getRandomInt(0, 2);
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const gameResult = calcGame(randomOperator, num1, num2);
  const question = questionExpression(randomOperator, num1, num2);
  return [question, gameResult];
};


const gameStart = () => game(calcData);

export default gameStart;
