import { getRandomInt } from '../index';
import game from '../game-engine';
import primeGame from '../Games/prime';

const primeData = () => {
  const questionNum = getRandomInt(1, 100);
  const question = `Question: ${questionNum}`;
  const gameResult = primeGame(questionNum);
  return [question, gameResult];
};

const startGame = () => game(primeData);

export default startGame;
