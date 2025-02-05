const solution = (maps) => {
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    const arr = maps.map(v => v.split(''));
    const cols = maps[0].length, rows = maps.length;
    const visited = Array.from({length: rows}, () => Array(cols).fill(false));
    const answer = [];
    const isValid = (x, y) => {
        if(x >= 0 && y >= 0 && x < rows && y < cols){
            return true;
        }
        return false;
    }
    const dfs = (r, c) => {
        let count = parseInt(arr[r][c]);
        visited[r][c] = true;
        for(let k = 0; k < 4; k++){
            let nx = r + dx[k];
            let ny = c + dy[k];
            if(isValid(nx, ny) && !visited[nx][ny] && arr[nx][ny] !== 'X'){
                count += dfs(nx, ny);
            }
        }
        return count;
    }
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(!visited[i][j] && arr[i][j] !== 'X'){
                let sum = dfs(i, j);
                answer.push(sum);
            }
        }
    }
    return answer.length > 0 ? answer.sort((a,b) => a - b) : [-1]
}