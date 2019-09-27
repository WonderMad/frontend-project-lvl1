#!/usr/bin/env node

import { getRandomInt } from '../../index';
import game from '../game-engine';
import helloUserName from '../brain-games';
// Приветствие
const userName = helloUserName();


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
  }
  return 'yes';
};

game(isPrime, userName);
