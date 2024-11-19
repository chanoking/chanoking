const bfs = (maps, start, target) => {
    const rows = maps.length;
    const cols = maps[0].length;
    
    const visited = Array.from({length: rows}, () => Array(cols).fill(false));;
    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const queue = [[...start, 0]];
    while(queue.length){
        const [x, y, dist] = queue.shift();
        
        if(x === target[0] && y === target[1]) return dist;
        
        for(let [dx, dy] of directions){
            const nx = dx + x;
            const ny = dy + y;
            
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols &&
              !visited[nx][ny] && maps[nx][ny] !== "X"){
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    return -1;
}

const solution = (maps) => {
    const rows = maps.length;
    const cols = maps[0].length;
    
    let lever, exit, start;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(maps[i][j] === "L") lever = [i, j];
            if(maps[i][j] === "E") exit = [i, j];
            if(maps[i][j] === "S") start = [i, j];
        }
    }
    
    const startToLever = bfs(maps, start, lever);
    if(startToLever === -1) return -1;
    
    const leverToExit = bfs(maps, lever, exit);
    if(leverToExit === -1) return -1;
    
    return startToLever + leverToExit;
}