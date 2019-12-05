import getRandomInt from '../utils';
import game from '..';

const gameIntro = 'What number is missing in the progression?';

const makeProgressionWithHiddenElement = (interval, startPosition, progressionLength,
  hiddenElementPosition) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = startPosition + interval * i;
  }
  const question = progression;
  question[hiddenElementPosition] = '..';
  return question;
};

const generateBrainProgressionData = () => {
  const maxInterval = 10;
  const farthestPosition = 50;
  const progressionLength = 10;
  const startPosition = getRandomInt(1, farthestPosition);
  const interval = getRandomInt(1, maxInterval);
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);
  const result = (startPosition + interval * hiddenElementPosition).toString();
  const question = makeProgressionWithHiddenElement(interval, startPosition, progressionLength,
    hiddenElementPosition);
  return [question, result];
};

const startGame = () => game(gameIntro, generateBrainProgressionData);

export default startGame;
