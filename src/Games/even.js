import getRandomInt from '../index';
import game from '../game-engine';

const isEven = (question) => question % 2 === 0;


const transferBrainEvenData = () => {
  const gameIntro = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  const question = getRandomInt(1, 100);
  const result = isEven(question) === true ? 'yes' : 'no';
  return [gameIntro, question, result];
};


const startGame = () => game(transferBrainEvenData);

export default startGame;
