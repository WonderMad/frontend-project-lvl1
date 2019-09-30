import { getRandomInt } from '../index';


const primeGame = () => {
  const randomNum = getRandomInt(2, 101);
  let i = 2;
  console.log(`question: ${randomNum}`);
  while (i <= randomNum) {
    if (randomNum % i !== 0) {
      i += 1;
    } else if (randomNum % i === 0 && i < randomNum) {
      return 'no';
    } else return 'yes';
    /* Не понял как избвавиться от consistent-return, поэтому в конце добавил return 'yes'
    Хоть без него работает нормально, но linter жалуется, а если оставить только его,
    то вывод не правильный */
  }
  return 'yes';
};

export default primeGame;
