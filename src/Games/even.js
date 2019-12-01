import getRandomInt from '../utils';
import game from '..';

const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => question % 2 === 0;

const generateBrainEvenData = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) === true ? 'yes' : 'no';
  return [question, answer];
};


const startGame = () => game(gameIntro, generateBrainEvenData);

export default startGame;
