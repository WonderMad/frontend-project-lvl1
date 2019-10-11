const gcdGame = (num1, num2) => {
  let numb1 = num1;
  let numb2 = num2;
  while (numb1 !== 0 && numb2 !== 0) {
    if (numb1 > numb2) {
      numb1 %= numb2;
    } else numb2 %= numb1;
  }
  return `${numb1 + numb2}`;
};


export default gcdGame;
