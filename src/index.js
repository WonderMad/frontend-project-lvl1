import * as readlineSync from 'readline-sync';

const answersCount = 3;

const game = (gameIntro, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameIntro);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`hello ${userName}`);
  for (let i = 1; i <= answersCount; i += 1) {
    const [question, result] = gameData();
    console.log(`question ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('correct\n');
    }
    if (result !== answer) {
      i = 0;
      console.log(`${answer} is wrong answer.Correct answer was ${result}`);
      console.log(`Let's try again, ${userName}`);
    }
  }
  console.log(`Congratsulations! ${userName}`);
};

export default game;
