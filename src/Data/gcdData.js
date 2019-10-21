import getRandomInt from '../index';
import playGcd from '../Games/gcd';
import game from '../game-engine';

const transferData = () => {
  const possibleGCD = getRandomInt(1, 11);
  const num1 = possibleGCD * getRandomInt(1, 25);
  const num2 = possibleGCD * getRandomInt(1, 25);
  const question = `Question: ${num1}, ${num2}`;
  const gameResult = playGcd(num1, num2);
  return [question, gameResult];
};

const startGame = () => game(transferData);

export default startGame;
