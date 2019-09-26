#!/usr/bin/env node

import { askName, answer, getRandomInt } from '../index';
// Приветствие
console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.\n');
const name = askName();
console.log(`Hello ${name}\n`);

// Функция для вывода двух чисел c возвратом рассчитанного НОД
const gcdQuestion = () => {
  const num = getRandomInt(1, 7); // Беру случайное число от 1 до 7(возможный НОД)
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

// Игра
const gcdTrick = () => {
  let i = 1;
  while (i <= 3) {
    const result = gcdQuestion();
    const userAnswer = answer();
    if (userAnswer === result) {
      i += 1;
      console.log('correct!\n');
    }
    if (userAnswer !== result) {
      i = 0;
      console.log(`${userAnswer} is wrong answer. Correct answer was ${result}\nLet's try again, ${name}`);
    }
  }
  console.log(`Congratsulations! ${name}`);
};
gcdTrick();
