import getRandomInt from '../index';
import game from '../game-engine';
import playCalc from '../Games/calc';


const calcDataTransfer = () => {
  const firstOperator = 0;
  const lastOperator = 2;
  const randomOperator = getRandomInt(firstOperator, lastOperator);
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const questionOperation = `${num1} ${operators[randomOperator]} ${num2}`;
  const gameResult = playCalc(randomOperator, num1, num2);
  return [questionOperation, gameResult];
};


const startGame = () => game(calcDataTransfer);

export default startGame;
