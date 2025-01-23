function timeToMin(time) {
  const [hh, mm] = time.split(':').map(Number);
  return hh * 60 + mm;
}

function solution(plans) {
  const answer = [];

  const sortedPlans = plans
    .map(([subject, time, count]) => [subject, timeToMin(time), Number(count)])
    .sort((a, b) => a[1] - b[1]);

  const stack = [];

  for (let i = 0; i < sortedPlans.length - 1; i++) {
    const [subject, time, count] = sortedPlans[i];

    if (time + count <= sortedPlans[i + 1][1]) {
      answer.push(subject);
      let availableTime = sortedPlans[i + 1][1] - time - count;

      while (stack.length) {
        const [currentSubject, currentTime] = stack.pop();
        if (currentTime <= availableTime) {
          availableTime -= currentTime;
          answer.push(currentSubject);
        } else {
          stack.push([currentSubject, currentTime - availableTime]);
          break;
        }
      }
    } else {
      stack.push([subject, count - (sortedPlans[i + 1][1] - time)]);
    }
  }
  answer.push(sortedPlans[sortedPlans.length - 1][0]);

  while (stack.length) {
    answer.push(stack.pop()[0]);
  }
  return answer;
}