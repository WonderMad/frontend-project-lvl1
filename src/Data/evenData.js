import getRandomInt from '../index';
import isEven from '../Games/even';
import game from '../game-engine';


const evenDataTransfer = () => {
  const question = `${getRandomInt(1, 100)}`;
  const gameResult = isEven(question);
  let result;
  if (gameResult === true) {
    result = 'yes';
  } else result = 'no';
  return [question, result];
};
const startGame = () => game(evenDataTransfer);

export default startGame;
