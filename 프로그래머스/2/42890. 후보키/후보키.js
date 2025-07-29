function solution(relation) {
  const rowLen = relation.length;
  const colLen = relation[0].length;

  const bfs = () => {
    const queue = [...Array(colLen)].map((_, i) => [i]);
    const candidate = [];
    while (queue.length) {
      const indices = queue.shift();
      // console.log(indices);

      console.log(
        candidate.find((cand) => cand.every((index) => indices.includes(index)))
      );

      // 최소성을 만족하지 않는 경우 제외
      if (
        candidate.find((cand) => cand.every((index) => indices.includes(index)))
      ) {
        continue;
      }

      const set = new Set();
      for (let i = 0; i < rowLen; i++) {
        set.add(JSON.stringify(indices.map((index) => relation[i][index])));
        // console.log(set);
      }

      // 유일성을 만족하면 candidate에 추가
      if (set.size === rowLen) {
        candidate.push(indices);

        // 유일성을 만족하지 않으면 컬럼을 하나 더 추가
      } else {
        for (let i = indices[indices.length - 1] + 1; i < colLen; i++) {
          queue.push([...indices, i]);
        }
      }
    }

    return candidate.length;
  };

  return bfs();
}
