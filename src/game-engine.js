import { answer } from './index';
import helloUserName from './brain-games';


const game = (gameData) => {
  const userName = helloUserName();
  for (let i = 1; i <= 3; i += 1) {
    const values = gameData();
    const question = values[0];
    console.log(question);
    const result = values[1];
    const userAnswer = answer();
    if (userAnswer === result) {
      console.log('correct!\n');
    } else {
      i = 0;
      console.log(`${userAnswer} is wrong answer.Correct answer was ${result}\nLet's try again, ${userName}`);
    }
  }
  console.log(`Congratsulations! ${userName}`);
};

export default game;
