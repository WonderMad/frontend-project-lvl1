import getRandomInt from '../utils';
import startGame from '..';

const gameIntro = 'What number is missing in the progression?';

const maxInterval = 10;
const farthestPosition = 50;
const progLength = 10;

const returnQuestion = (interval, startPosition, progressionLength,
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
  const startPosition = getRandomInt(1, farthestPosition);
  const interval = getRandomInt(1, maxInterval);
  const hiddenElementPosition = getRandomInt(0, progLength - 1);
  const result = (startPosition + interval * hiddenElementPosition).toString();
  const question = returnQuestion(interval, startPosition, progLength,
    hiddenElementPosition);
  return [question, result];
};

const startGame = () => game(gameIntro, generateBrainProgressionData);

export default startGame;
