const solution = (maps) => {
    const rows = maps.length, cols = maps[0].length;
    const visited = Array.from({length : rows}, () => Array(cols).fill(false));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const isValid = (x, y) => {
        return x >= 0 && x < rows && y >= 0 && y < cols;
    }
    const arr = maps.map(v => v.split(''));
    const dfs = (x, y) => {
        let count = parseInt(arr[x][y])
        visited[x][y] = true;
        for(let k = 0; k < dx.length; k++){
            const nx = x + dx[k];
            const ny = y + dy[k];
            if(isValid(nx,ny) && !visited[nx][ny] && arr[nx][ny] !== 'X'){
                count += dfs(nx, ny);
            }
        }
        return count;
    }
    const answer = [];
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(!visited[i][j] && arr[i][j] !== 'X'){
                let totalDays = dfs(i, j);
                answer.push(totalDays)
            }
        }
    }
    return answer.length > 0 ? answer.sort((a,b) => a - b) : [-1];
}