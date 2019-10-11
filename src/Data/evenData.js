import { getRandomInt } from '../index';
import evenGame from '../Games/even';
import game from '../game-engine';

const evenData = () => {
  const questionNum = getRandomInt(1, 100);
  const gameResult = evenGame(questionNum);
  const question = `${questionNum}`;
  return [question, gameResult];
};

const gameStart = () => game(evenData);

export default gameStart;
