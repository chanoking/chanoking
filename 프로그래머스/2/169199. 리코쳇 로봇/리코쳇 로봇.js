const solution = (board) => {
    let G, R;
    const Ds = new Set();
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === "R") R = [i, j];
            if(board[i][j] === "G") G = [i, j];
            if(board[i][j] === "D") Ds.add(`${i},${j}`);
        }
    }
    const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(false));
    const directions = [[1,0],[0,1],[-1,0],[0,-1]];
    const queue = [[...R, 0]];
    visited[R[0]][R[1]] = true;
    let cols = board[0].length;
    let rows = board.length;
    while(queue.length){
        let [row, col, steps] = queue.shift();
        if(row === G[0] && col === G[1]) return steps;
        for(let d of directions){
            let r = row, c = col, step = steps;
            let [rd, rc] = d;
            while(r + rd >= 0 && r + rd < rows && c + rc >= 0 && c + rc < cols && !Ds.has(`${r + rd},${c + rc}`)){
                r += rd;
                c += rc;
            }
            if(!visited[r][c]){
                queue.push([r, c, step + 1]);
                visited[r][c] = true
            }
        }
    }
    return -1;
}