import getRandomInt from '../index';
import game from '../game-engine';

const isPrime = (question) => {
  if (question === 1) {
    return false;
  }
  if (question === 2) {
    return true;
  }
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};


const transferData = () => {
  const question = `${getRandomInt(1, 100)}`;
  const result = isPrime(question) === true ? 'yes' : 'no';
  return [question, result];
};


const startGame = () => game(transferData);

export default startGame;
