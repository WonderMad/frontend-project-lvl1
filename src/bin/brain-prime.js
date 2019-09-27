#!/usr/bin/env node

import { askName, answer, getRandomInt } from '../index';

// Приветствие
console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
const name = askName();
console.log(`Hello ${name}\n`);


const isPrime = () => {
  const randomNum = getRandomInt(2, 101);
  let i = 2;
  console.log(randomNum);
  while (i <= randomNum) {
    if (randomNum % i !== 0) {
      i += 1;
    } else if (randomNum % i === 0 && i !== randomNum) {
      return 'no';
    }
    return 'yes';
  }
};

const primeGame = () => {
  let i = 1;
  while (i <= 3) {
    const result = isPrime();
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
primeGame();
