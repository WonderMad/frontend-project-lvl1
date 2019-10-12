import * as readlineSync from 'readline-sync';

const helloUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  return name;
};

export default helloUserName;
