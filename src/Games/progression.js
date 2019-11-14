import getRandomInt from '../index';
import game from '../game-engine';


const makeSpaceInProgression = (distanceBetweenNumsInProgression, progStartNum,
  progression, randomQuestionPosition) => {
  const reassignedProgression = progression;
  const line = progression;
  let i = 0;
  let j = distanceBetweenNumsInProgression;
  while (i < progression.length) {
    line[i] = `${j + progStartNum}`;
    i += 1;
    j += distanceBetweenNumsInProgression;
  }
  const result = progression[randomQuestionPosition];
  reassignedProgression[randomQuestionPosition] = '...';
  return result;
};

const transferBrainProgressionData = () => {
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
  return [question, result];
};


const startGame = () => game(transferBrainProgressionData);

export default startGame;
