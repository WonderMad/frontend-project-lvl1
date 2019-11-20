import getRandomInt from '../index';

const operatorGeneration = () => {
  const operators = ['+', '-', '*'];
  const lastOperator = operators.length - 1;
  const randomOperator = getRandomInt(0, lastOperator);
  return operators[randomOperator];
};

export default operatorGeneration;
