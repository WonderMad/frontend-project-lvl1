#!/usr/bin/env node
import { getRandomInt } from '../../index';
import game from '../game-engine';
import helloUserName from '../brain-games';

const userName = helloUserName();

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


game(progression, userName);
