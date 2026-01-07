const solution = (n, roads, sources, destination) => {
  // 1. 그래프 생성
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // 2. 거리 배열 (-1 = 도달 불가)
  const dist = Array(n + 1).fill(-1);
  dist[destination] = 0;

  // 3. BFS
  const queue = [destination];
  let idx = 0;

  while (idx < queue.length) {
    const cur = queue[idx++];

    for (const next of graph[cur]) {
      if (dist[next] === -1) {
        dist[next] = dist[cur] + 1;
        queue.push(next);
      }
    }
  }

  // 4. 결과 추출
  return sources.map((s) => dist[s]);
};