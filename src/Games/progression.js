import { getRandomInt } from '../index';


const progressionGame = () => {
  const progStart = getRandomInt(1, 50);
  const progressionSpace = getRandomInt(1, 10);
  const progressionLength = 10;
  const progressionArr = new Array(progressionLength);
  const randomPosition = getRandomInt(2, 9);

  let i = 0;
  let j = progressionSpace;
  while (i < progressionArr.length) {
    progressionArr[i] = `${j + progStart}`;
    i += 1;
    j += progressionSpace;
  }
  const result = progressionArr[randomPosition];
  progressionArr[randomPosition] = '...';
  console.log(progressionArr);
  return result;
};

export default progressionGame;
