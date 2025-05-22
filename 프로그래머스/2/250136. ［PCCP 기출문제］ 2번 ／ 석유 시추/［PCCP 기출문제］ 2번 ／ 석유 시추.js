const solution = (land) => {
    const row = land.length
    const col = land[0].length;
    const visited = Array.from({length : row}, () => Array(col).fill(false));
    const columns = Array(col).fill(0);
    const bfs = (x, y) => {
        let count = 1;
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];
        const queue = [[x,y]];
        visited[x][y] = true;
        const setCol = new Set([y]);
        while(queue.length){
            const [cx, cy] = queue.shift();
            for(let i = 0; i < 4; i ++){
                const nx = cx + dx[i];
                const ny = cy + dy[i];
                if(nx >=0 && nx < row && ny >= 0 && ny < col && !visited[nx][ny] && land[nx][ny] === 1){
                    count++;
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                    setCol.add(ny)
                }
            }
        }
        setCol.forEach(v => columns[v] += count)
    }
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(land[i][j] === 1 && !visited[i][j]){
                bfs(i, j);
            }
        }
    }
    return Math.max(...columns);
}
























