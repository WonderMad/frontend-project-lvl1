
const playProgression = (distanceBetweenNumsInProgression, progStartNum,
  progression, randomQuestionPosition) => {
  const reassignedProgression = progression;
  const line = progression;
  let i = 0;
  let j = distanceBetweenNumsInProgression;
  while (i < progression.length) {
    line[i] = `${j + progStartNum}`;
    i += 1;
    j += distanceBetweenNumsInProgression;
  }
  const result = progression[randomQuestionPosition];
  reassignedProgression[randomQuestionPosition] = '...';
  return result;
};

export default playProgression;
