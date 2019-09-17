#!/usr/bin/env node

import { askName, answer, getRandomInt } from '../index';
// Приветствие
console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');
const name = askName();
console.log(`Hello ${name}\n`);
// функция для генерации случайного выражения и вывода на экран
const expression = () => {
  const randomOperator = getRandomInt(1, 3);
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const multiNum1 = getRandomInt(1, 20);
  const multiNum2 = getRandomInt(1, 10);
  if (randomOperator === 1) {
    console.log(`${num1} + ${num2}`);
    return `${num1 + num2}`;
  }
  if (randomOperator === 2) {
    console.log(`${num1} - ${num2}`);
    return `${num1 - num2}`;
  }
  if (randomOperator === 3) {
    console.log(`${multiNum1} * ${multiNum2}`);
    return `${multiNum1 * multiNum2}`;
  }
};
// Игра
const calcTrick = () => {
  let i = 0;
  while (i <= 3) {
    if (i === 3) {
      return console.log(`Congratsulations! ${name}`);
    }
    const result = expression();
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
};

calcTrick();
