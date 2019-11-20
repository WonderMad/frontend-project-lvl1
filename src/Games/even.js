import getRandomInt from '../utils';
import game from '..';

const isEven = (question) => question % 2 === 0;


const transferBrainEvenData = () => {
  const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomInt(1, 100);
  const result = isEven(question) === true ? 'yes' : 'no';
  return [gameIntro, question, result];
};


const startGame = () => game(transferBrainEvenData);

export default startGame;
