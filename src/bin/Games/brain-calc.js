#!/usr/bin/env node

import { getRandomInt } from '../../index';
import game from '../game-engine';
import helloUserName from '../brain-games';

const userName = helloUserName();

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

game(expression, userName);
