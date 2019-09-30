import { getRandomInt } from '../index';


const gcdGame = () => {
  const num = getRandomInt(1, 11); // Беру случайное число от 1 до 11(возможный НОД)
  let num1 = num * getRandomInt(1, 25);
  let num2 = num * getRandomInt(1, 25);
  console.log(`Question: ${num1}, ${num2}`);
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else num2 %= num1;
  }
  return `${num1 + num2}`; // возврат настоящего НОД
};

export default gcdGame;
