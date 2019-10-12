import getRandomInt from '../index';
import gcdGame from '../Games/gcd';
import game from '../game-engine';

const gcdData = () => {
  const possibleGCD = getRandomInt(1, 11);
  const num1 = possibleGCD * getRandomInt(1, 25);
  const num2 = possibleGCD * getRandomInt(1, 25);
  const question = `Question: ${num1}, ${num2}`;
  const gameResult = gcdGame(num1, num2);
  return [question, gameResult];
};

const gameStart = () => game(gcdData);

export default gameStart;
