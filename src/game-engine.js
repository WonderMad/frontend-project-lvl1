import * as readlineSync from 'readline-sync';


const game = (gameData) => {
  const gameIntro = gameData()[0];
  console.log('Welcome to the Brain Games!');
  console.log(gameIntro);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`hello ${userName}\n`);
  const answersForWin = 3;
  for (let i = 1; i <= answersForWin; i += 1) {
    const values = gameData();
    const question = `Question: ${values[1]}`;
    const result = values[2];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('correct\n');
    }
    if (result !== answer) {
      i = 0;
      console.log(`${answer} is wrong answer.Correct answer was ${result}`);
      console.log(`Let's try again, ${userName}\n`);
    }
  }
  console.log(`Congratsulations! ${userName}`);
};

export default game;
