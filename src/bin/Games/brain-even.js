#!/usr/bin/env node

import { answer, getRandomInt } from '../../index';
import helloUserName from '../brain-games';

const userName = helloUserName();
// Игра
const isEvenGame = () => {
  let i = 1;
  while (i <= 3) {
    const randomNum = getRandomInt(1, 100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = answer();
    if ((randomNum % 2 === 0 && userAnswer === 'yes') || (randomNum % 2 === 1 && userAnswer === 'no')) {
      i += 1;
      console.log('correct!\n');
    }
    if ((randomNum % 2 === 0 && userAnswer === 'no') || (randomNum % 2 === 1 && userAnswer === 'yes')) {
      i = 1;
      console.log(`'no' is wrong answer. Correct answer was 'yes'.\nLet's try again, ${userName}\n`);
    }
    if (userAnswer !== 'no' && userAnswer !== 'yes') {
      i = 1;
      console.log(`'${userAnswer}' is wrong answer. Answer 'yes' or 'no'.\n`);
    }
  }
  console.log(`Congratsulations! ${userName}`);
};
isEvenGame();
