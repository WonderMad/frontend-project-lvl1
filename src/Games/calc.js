import getRandomInt from '../index';
import game from '../game-engine';
import operatorGeneration from '../calcOperator';


const randomExpression = (num1, num2) => {
  switch (operatorGeneration()) {
    case '+':
      return ['+', num1 + num2];
    case '-':
      return ['-', num1 - num2];
    case '*':
      return ['*', num1 * num2];
    default:
      return null;
  }
};

const transferBrainCalcData = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const values = randomExpression(num1, num2);
  const question = `${num1}${values[0]}${num2}`;
  const result = `${values[1]}`;
  return [question, result];
};


const startGame = () => game(transferBrainCalcData);

export default startGame;
