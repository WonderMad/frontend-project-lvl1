import getRandomInt from '../index';
import game from '../game-engine';
import playProgression from '../Games/progression';


const progressionDataTransfer = () => {
  const maxInterval = 10;
  const farthestPosition = 50;
  const progressionLength = 10;
  const maxQuestionPosition = 8;

  const progressionStartPosition = getRandomInt(1, farthestPosition);
  const progressionInterval = getRandomInt(1, maxInterval);
  const progression = new Array(progressionLength);
  const randomQuestionPosition = getRandomInt(1, maxQuestionPosition);
  const question = progression;
  const result = playProgression(progressionInterval, progressionStartPosition, progression,
    randomQuestionPosition);
  return [question, result];
};

const startGame = () => game(progressionDataTransfer);

export default startGame;
