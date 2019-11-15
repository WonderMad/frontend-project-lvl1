import getRandomInt from '../index';
import game from '../game-engine';


const makeSpaceInProgression = (progressionInterval, progressionStartPosition,
  progression, randomQuestionPosition) => {
  const reassignedProgression = progression;
  const line = progression;
  let i = 0;
  let j = progressionInterval;
  while (i < progression.length) {
    line[i] = `${j + progressionStartPosition}`;
    i += 1;
    j += progressionInterval;
  }
  const result = `${progressionStartPosition + progressionInterval * (randomQuestionPosition + 1)}`;
  reassignedProgression[randomQuestionPosition] = '..';
  return result;
};

const transferBrainProgressionData = () => {
  const gameIntro = 'What number is missing in the progression?\n';
  const maxInterval = 10;
  const farthestPosition = 50;
  const progressionLength = 10;
  const maxQuestionPosition = 8;

  const progressionStartPosition = getRandomInt(1, farthestPosition);
  const progressionInterval = getRandomInt(1, maxInterval);
  const progression = new Array(progressionLength);
  const randomQuestionPosition = getRandomInt(1, maxQuestionPosition);
  const question = progression;
  const result = makeSpaceInProgression(progressionInterval, progressionStartPosition, progression,
    randomQuestionPosition);
  return [gameIntro, question, result];
};

const startGame = () => game(transferBrainProgressionData);

export default startGame;
