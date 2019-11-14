import getRandomInt from '../index';
import game from '../game-engine';


const calculateGcd = (num1, num2) => {
  let numb1 = num1;
  let numb2 = num2;
  while (numb1 !== 0 && numb2 !== 0) {
    if (numb1 > numb2) {
      numb1 %= numb2;
    } else numb2 %= numb1;
  }
  return numb1 + numb2;
};


const transferBrainGcdData = () => {
  const possibleGCD = getRandomInt(1, 11);
  const num1 = possibleGCD * getRandomInt(1, 25);
  const num2 = possibleGCD * getRandomInt(1, 25);
  const question = `Question: ${num1}, ${num2}`;
  const gameResult = `${calculateGcd(num1, num2)}`;
  return [question, gameResult];
};


const startGame = () => game(transferBrainGcdData);

export default startGame;
