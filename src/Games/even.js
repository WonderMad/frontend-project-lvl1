import { getRandomInt } from '../index';

const evenGame = () => {
  const question = getRandomInt(1, 100);
  console.log(`Question: ${question}`);
  if (question % 2 === 0) {
    return 'yes';
  }
  if (question % 2 === 1) {
    return 'no';
  }
  return '';
};

export default evenGame;
