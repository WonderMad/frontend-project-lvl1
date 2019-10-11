const evenGame = (questionNum) => {
  if (questionNum % 2 === 0) {
    return 'yes';
  }
  if (questionNum % 2 === 1) {
    return 'no';
  }
  return '';
};

export default evenGame;
