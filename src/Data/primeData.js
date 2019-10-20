import getRandomInt from '../index';
import game from '../game-engine';
import isPrime from '../Games/prime';

const primeData = () => {
  const question = `${getRandomInt(1, 100)}`;
  let result;
  const gameResult = isPrime(question);
  if (gameResult === true) {
    result = 'yes';
  } else result = 'no';
  return [question, result];
};

const startGame = () => game(primeData);

export default startGame;
