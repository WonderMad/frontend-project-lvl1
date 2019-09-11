#!/usr/bin/env node

import { ask } from '../index';

console.log('Welcome to the Brain Games!');
const name = ask();
console.log(`Hello ${name}`);
