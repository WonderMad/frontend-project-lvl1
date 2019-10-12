import getRandomInt from '../index';
import game from '../game-engine';
import progressionGame from '../Games/progression';


const progressionData = () => {
  const progStartNum = getRandomInt(1, 50);
  const distanceBetweenNumsInProg = getRandomInt(1, 10);

  const progressionLength = 10;
  const progression = new Array(progressionLength);

  const minQuestionPosition = 1;
  const maxQuestionPosition = 8;
  const randomQuestionPosition = getRandomInt(minQuestionPosition, maxQuestionPosition);


  const question = progression;
  const result = progressionGame(distanceBetweenNumsInProg, progStartNum, progression,
    randomQuestionPosition);
  return [question, result];
};

const startGame = () => game(progressionData);

export default startGame;
