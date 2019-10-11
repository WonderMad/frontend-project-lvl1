const calcGame = (randomOperator, num1, num2) => {
  switch (randomOperator) {
    case 0:
      return `${num1 + num2}`;
    case 1:
      return `${num1 - num2}`;
    default:
      return `${num1 * num2}`;
  }
};
export default calcGame;
