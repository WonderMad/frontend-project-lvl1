import getRandomInt from '../utils';
import game from '..';

const gameIntro = 'What number is missing in the progression?';

const makeProgressionQuestion = (interval, startPosition, progressionLength,
  randomEmptyPosition) => {
  const line = [];
  for (let i = 0; i < progressionLength; i += 1) {
    line[i] = startPosition + interval * i;
  }
  const reassignedProgression = line;
  reassignedProgression[randomEmptyPosition] = '..';
  const result = (startPosition + interval * randomEmptyPosition).toString();
  return [result, reassignedProgression];
};

const generateBrainProgressionData = () => {
  const maxInterval = 10;
  const farthestPosition = 50;
  const progressionLength = 10;
  const startPosition = getRandomInt(1, farthestPosition);
  const interval = getRandomInt(1, maxInterval);
  const randomEmptyPosition = getRandomInt(1, progressionLength - 2);
  const result = makeProgressionQuestion(interval, startPosition, progressionLength,
    randomEmptyPosition)[0];
  const question = makeProgressionQuestion(interval, startPosition, progressionLength,
    randomEmptyPosition)[1];
  return [question, result];
};

const startGame = () => game(gameIntro, generateBrainProgressionData);

export default startGame;
