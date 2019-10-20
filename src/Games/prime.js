const isPrime = (question) => {
  let i = 2;
  while (i <= question) {
    if (question % i !== 0) {
      i += 1;
    } else if (question % i === 0 && i < question) {
      return false;
    }
    return true;
  }
  return true;
};

export default isPrime;
