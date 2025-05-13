const solution = (storage, requests) => {
    const row = storage.length;
    const col = storage[0].length;
    let result = row * col;
    let storageMap = storage.map(v => v.split(''));
    
    const bfs = (x, y, arr) => {
        const visited = Array.from({length: row}, () => Array(col).fill(false));
        const queue = [[x,y]];
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];
        visited[x][y] = true;
        while(queue.length){
            const [cx, cy] = queue.shift();
            for(let i = 0; i < 4; i++){
                const rx = cx + dx[i];
                const ry = cy + dy[i];
                
                if(rx < 0 || rx >= row || ry < 0 || ry >= col){
                    storageMap[x][y] = '.';
                    return 1;
                }
                
                if(arr[rx][ry] === '.' && !visited[rx][ry]){
                    visited[rx][ry] = true;
                    queue.push([rx, ry]);
                }
            }
        }
        return 0
    }
    
    requests.forEach(request => {
        const currentStorage = JSON.parse(JSON.stringify(storageMap));
        if(request.length > 1){
            for(let i = 0; i < row; i++){
                for(let j = 0 ; j < col; j++){
                    if(currentStorage[i][j] === request[0]){
                        storageMap[i][j] = '.';
                        result--;
                    }
                }
            }
        }else{
            for(let i = 0; i < row; i++){
                for(let j = 0; j < col; j++){
                    if(currentStorage[i][j] === request){
                        result -= bfs(i, j, currentStorage)
                    }
                }
            }
        }
    })
    
    return result;
}