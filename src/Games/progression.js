import getRandomInt from '../utils';
import game from '..';


const makeProgressionGame = (interval, startPosition, unfilledProgression,
  randomQuestionPosition) => {
  const reassignedProgression = unfilledProgression;
  const line = unfilledProgression;
  let i = 0;
  while (i < unfilledProgression.length - 1) {
    line[i] = startPosition + interval * i;
    i += 1;
  }
  const result = (startPosition + interval * randomQuestionPosition).toString();
  reassignedProgression[randomQuestionPosition] = '..';
  return result;
};

const makeBrainProgressionData = () => {
  const gameIntro = 'What number is missing in the progression?';
  const maxInterval = 10;
  const farthestPosition = 50;
  const progressionLength = 10;
  const maxQuestionPosition = 8;

  const startPosition = getRandomInt(1, farthestPosition);
  const interval = getRandomInt(1, maxInterval);
  const unfilledProgression = new Array(progressionLength);
  const randomQuestionPosition = getRandomInt(1, maxQuestionPosition);
  const question = unfilledProgression;
  const result = makeProgressionGame(interval, startPosition, unfilledProgression,
    randomQuestionPosition);
  return [gameIntro, question, result];
};

const startGame = () => game(makeBrainProgressionData);

export default startGame;
