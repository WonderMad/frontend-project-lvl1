
import getRandomInt from '../utils';
import game from '..';

const gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(question); i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};


const generateBrainPrimeData = () => {
  const question = getRandomInt(1, 100);
  const answer = isPrime(question) === true ? 'yes' : 'no';
  return [question, answer];
};


const startGame = () => game(gameIntro, generateBrainPrimeData);

export default startGame;
