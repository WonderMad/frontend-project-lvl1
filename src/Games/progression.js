import getRandomInt from '../utils';
import game from '..';


const makeProgressionGame = (interval, startPosition, progression, randomQuestionPosition) => {
  const reassignedProgression = progression;
  const line = progression;
  let i = 0;
  while (i < progression.length - 1) {
    line[i] = startPosition + interval * i;
    i += 1;
  }
  const result = (startPosition + interval * randomQuestionPosition).toString();
  reassignedProgression[randomQuestionPosition] = '..';
  return result;
};

const transferBrainProgressionData = () => {
  const gameIntro = 'What number is missing in the progression?';
  const maxInterval = 10;
  const farthestPosition = 50;
  const progressionLength = 10;
  const maxQuestionPosition = 8;

  const startPosition = getRandomInt(1, farthestPosition);
  const interval = getRandomInt(1, maxInterval);
  const progression = new Array(progressionLength);
  const randomQuestionPosition = getRandomInt(1, maxQuestionPosition);
  const question = progression;
  const result = makeProgressionGame(interval, startPosition, progression, randomQuestionPosition);
  return [gameIntro, question, result];
};

const startGame = () => game(transferBrainProgressionData);

export default startGame;
