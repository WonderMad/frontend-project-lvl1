import * as readlineSync from 'readline-sync';

const askName = () => {
  const question = readlineSync.question('May I have your name? ');
  return question;
};
export default { askName };
