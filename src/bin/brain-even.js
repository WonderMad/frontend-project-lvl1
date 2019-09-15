#!/usr/bin/env node

import { askName, answer, getRandomInt } from '../index';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = askName();
console.log(`Hello ${name}`);
const isEvenTrick = () => {
  let i = 0;
  while (i <= 3) {
    if (i === 3) {
      return console.log(`Congratsulations! ${name}`);
    }
    const randomNum = getRandomInt(1, 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = answer();
    if (randomNum % 2 === 0 && userAnswer === 'yes') {
      i += 1;
      console.log('correct');
    }
    if (randomNum % 2 === 0 && userAnswer === 'no') {
      i = 0;
      console.log(`'no' is wrong answer. Correct answer was 'yes'. Let's try again, ${name}`);
    }
    if (randomNum % 2 === 1 && userAnswer === 'yes') {
      i = 0;
      console.log(`'yes' is wrong answer. Correct answer was 'no'. Let's try again, ${name}`);
    }
    if (randomNum % 2 === 1 && userAnswer === 'no') {
      i += 1;
      console.log('correct');
    }
    if (userAnswer !== 'no' && userAnswer !== 'yes') {
      i = 0;
      console.log(`'${userAnswer}' is wrong answer. Answer 'yes' or 'no'.`);
    }
  }
};
isEvenTrick();
