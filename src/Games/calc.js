import getRandomInt from '../index';
import game from '../game-engine';


const operatorGeneration = () => {
  const operators = ['+', '-', '*'];
  const lastOperator = operators.length - 1;
  const randomOperator = getRandomInt(0, lastOperator);
  return operators[randomOperator];
};


const randomExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const makeBrainCalcData = () => {
  const gameIntro = 'What is the result of the expression?\n';
  const operator = operatorGeneration();
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const question = `${num1} ${operator} ${num2}`;
  const result = `${randomExpression(num1, num2, operator)}`;
  return [gameIntro, question, result];
};


const startGame = () => game(makeBrainCalcData);

export default startGame;
