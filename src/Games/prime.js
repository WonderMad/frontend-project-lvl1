const primeGame = (questionNum) => {
  let i = 2;
  while (i <= questionNum) {
    if (questionNum % i !== 0) {
      i += 1;
    } else if (questionNum % i === 0 && i < questionNum) {
      return 'no';
    } else return 'yes';
    /* Не понял как избвавиться от consistent-return, поэтому в конце добавил return 'yes'
    Хоть без него работает нормально, но linter жалуется, а если оставить только его,
    то вывод не правильный */
  }
  return 'yes';
};

export default primeGame;
