#!/usr/bin/env node

import { askName, answer, getRandomInt } from '../index';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const name = askName();
console.log(`Hello ${name}\n`);
const isEvenTrick = () => {
  let i = 0;
  while (i <= 3) {
    const randomNum = getRandomInt(1, 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = answer();
    if ((randomNum % 2 === 0 && userAnswer === 'yes') || (randomNum % 2 === 1 && userAnswer === 'no')) {
      i += 1;
      console.log('correct!\n');
    }
    if ((randomNum % 2 === 0 && userAnswer === 'no') || (randomNum % 2 === 1 && userAnswer === 'yes')) {
      i = 0;
      console.log(`'no' is wrong answer. Correct answer was 'yes'.\nLet's try again, ${name}\n`);
    }
    if (userAnswer !== 'no' && userAnswer !== 'yes') {
      i = 0;
      console.log(`'${userAnswer}' is wrong answer. Answer 'yes' or 'no'.\n`);
    }
  }
  console.log(`Congratsulations! ${name}`);
};
isEvenTrick();
