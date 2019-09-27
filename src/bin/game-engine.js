import { answer } from '../index';

const game = (gameFunc, userName) => {
  let i = 1;
  while (i <= 3) {
    const result = gameFunc();
    const userAnswer = answer();
    if (userAnswer === result) {
      i += 1;
      console.log('correct!\n');
    }
    if (userAnswer !== result) {
      i = 1;
      console.log(`${userAnswer} is wrong answer. Correct answer was ${result}\nLet's try again, ${userName}`);
    }
  }
  console.log(`Congratsulations! ${userName}`);
};

export default game;
