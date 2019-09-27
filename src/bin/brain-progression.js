#!/usr/bin/env node

import { askName, answer, getRandomInt } from '../index';

// Приветствие

console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?.\n');
const name = askName();
console.log(`Hello ${name}\n`);

// Вывод прогрессии через массив с возвратом ответа

const progression = () => {
  const progStart = getRandomInt(1, 50);
  const progressionSpace = getRandomInt(1, 10);
  const progressionArr = new Array(10);
  const randomPosition = getRandomInt(2, 9);

  let i = 0;
  let j = progressionSpace;
  while (i < progressionArr.length) {
    progressionArr[i] = `${j + progStart}`;
    i += 1;
    j += progressionSpace;
  }
  const result = progressionArr[randomPosition];
  progressionArr[randomPosition] = '...';
  console.log(progressionArr);
  return result;
};

// Игра

const progressionGame = () => {
  let i = 1;
  while (i <= 3) {
    const result = progression();
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
progressionGame();
