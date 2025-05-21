// const solution = (land) => {
//     const row = land.length;
//     const col = land[0].length;
//     let result = 0;
    
//     const bfs = (x, y) => {
//         const dx = [0, 0, 1, -1];
//         const dy = [1, -1, 0, 0];
//         const queue = [[x,y]];
//         let bundle = 0;
//         const visited = Array.from({length: row}, () => Array(col).fill(false));
//         visited[x][y] = true;
//         while(queue.length){
//             const [cx, cy] = queue.shift();
//             for(let i = 0; i < 4; i++){
//                 const rx = cx + dx[i];
//                 const ry = cy + dy[i];
                
//                 if(rx < row && rx >= 0 && ry < col && ry >= 0){
//                     if(land[rx][ry] === 1 && !visited[rx][ry]){
//                         bundle++;
//                         queue.push([rx, ry]);
//                         visited[rx][ry] = true;
//                     }  
//                 }
//             }
//         }
//         return bundle;
//     }
//     const final = [];
//     while(final.length !== col){
//         for(var i = 0; i < col; i++){
//         let maxArr = [];
//         let combine = 0;
//             for(let j = 0; j < row; j++){
//                 if(land[j][i] === 1) {
//                     result += bfs(j, i);
//                     maxArr.push(result);
//                 }else{
//                     combine += Math.max(...maxArr);
//                     maxArr = [];
//                 }
//             }
//             final.push(combine)
//         }
//     }     
//     return Math.max(...final);
// }

const solution = (land) => {
  const row = land.length;
  const col = land[0].length;
  const visited = Array.from({ length: row }, () => Array(col).fill(false));
  const colSums = Array(col).fill(0);

  const bfs = (x, y, groupId) => {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const queue = [[x, y]];
    visited[x][y] = true;
    let count = 1;
    let touchedCols = new Set([y]);

    while (queue.length) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (
          nx >= 0 && nx < row &&
          ny >= 0 && ny < col &&
          land[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          count++;
          touchedCols.add(ny);
        }
      }
    }

    // Add the count to all columns that this group touches
    touchedCols.forEach(c => colSums[c] += count);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }

  return Math.max(...colSums);
};
