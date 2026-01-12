const solution = (n, roads, sources, destination) => {
  const bridges = Array.from({ length: n + 1 }, () => []);

  for (let [roadA, roadB] of roads) {
    bridges[roadA].push(roadB);
    bridges[roadB].push(roadA);
  }

  const steps = Array(n + 1).fill(-1);

  const queue = [destination];

  let idx = 0;
  steps[destination] = 0;
  while (idx < queue.length) {
    let c = queue[idx++];
    for (let point of bridges[c]) {
      if (steps[point] === -1) {
        steps[point] = steps[c] + 1;
        queue.push(point);
      }
    }
  }

  return sources.map((source) => steps[source]);
};