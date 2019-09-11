import * as readlineSync from 'readline-sync';

const ask = () => {
  const question = readlineSync.question('May I have your name? ');
  return question;
};
export default { ask };
