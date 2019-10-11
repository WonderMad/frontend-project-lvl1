import { askName } from './index';

const helloUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello ${name}`);
  return name;
};

export default helloUserName;
