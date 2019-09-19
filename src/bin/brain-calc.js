#!/usr/bin/env node

import { askName, answer, getRandomInt } from '../index';
// Приветствие
console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');
const name = askName();
console.log(`Hello ${name}\n`);
// функция для генерации случайного выражения и вывода на экран с рассчетом результата
const expression = () => {
  const randomOperator = getRandomInt(1, 3);
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const multiNum1 = getRandomInt(1, 10);
  const multiNum2 = getRandomInt(1, 20);
  if (randomOperator === 1) {
    console.log(`Question: ${num1} + ${num2}`);
    return `${num1 + num2}`;
  }
  if (randomOperator === 2) {
    console.log(`Question: ${num1} - ${num2}`);
    return `${num1 - num2}`;
  }
  console.log(`Question: ${multiNum1} * ${multiNum2}`);
  return `${multiNum1 * multiNum2}`;
};
// Игра
const calcTrick = () => {
  let i = 1;
  while (i <= 3) {
    const result = expression();
    const userAnswer = answer();
    if (userAnswer === result) {
      i += 1;
      console.log('correct!\n');
    } else {
      i = 0;
      console.log(`${userAnswer} is wrong answer. Correct answer was ${result}\nLet's try again, ${name}`);
    }
  }
  console.log(`Congratsulations! ${name}`);
};

calcTrick();
