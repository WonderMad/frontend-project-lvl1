import * as readlineSync from 'readline-sync';


const game = (gameData) => {
  const userName = readlineSync.question('May I have your name? ');
  for (let i = 1; i <= 3; i += 1) {
    const values = gameData();
    const question = values[0];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const result = values[1];
    if (answer === result) {
      console.log('correct!\n');
    } else {
      i = 0;
      console.log(`${answer} is wrong answer.Correct answer was ${result}\nLet's try again, ${userName}`);
    }
  }
  console.log(`Congratsulations! ${userName}`);
};

export default game;
