import getRandomInt from '../index';
import game from '../game-engine';

const isEven = (question) => {
  if (question % 2 === 0) {
    return true;
  }
  return false;
};

const transferBrainEvenData = () => {
  const question = `${getRandomInt(1, 100)}`;
  const result = isEven(question) === true ? 'yes' : 'no';
  return [question, result];
};


const startGame = () => game(transferBrainEvenData);

export default startGame;
