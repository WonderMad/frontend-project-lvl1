import * as readlineSync from 'readline-sync';

const answersCount = 3;

const startGame = (gameIntro, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameIntro);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`hello ${userName}`);
  for (let i = 1; i <= answersCount; i += 1) {
    const [question, result] = gameData();
    console.log(`question ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    }
    if (result !== answer) {
      console.log(`${answer} is wrong answer.Correct answer was ${result}`);
      return console.log(`Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratsulations! ${userName}`);
};

export default startGame;
