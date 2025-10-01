const solution = (scores) => {
  const name = scores[0];
  let state = 1;
  let before = 0;

    scores.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });


  for (let score of scores) {
    if (score[0] > name[0] && score[1] > name[1]) {
      return -1;
    }
    if (before <= score[1]) {
      if (name[0] + name[1] < score[0] + score[1]) {
        state++;
      }
      before = score[1];
    }
  }

  return state;
};