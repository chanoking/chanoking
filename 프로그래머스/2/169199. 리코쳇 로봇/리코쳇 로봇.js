// function solution(board) {
//     let answer = 0;
//     board = board.map(v => v.split(''));
//     let G, R;
//     let D = [];
//     const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(false));
//     for(let i = 0; i < board.length; i++){
//         for(let j = 0; j < board[i].length; j++){
//             if(board[i+1][j] )
//             if(board[i][j] === 'G') G = [i, j];
//             if(board[i][j] === 'R') R = [i, j];
//             if(board[i][j] === 'D') D.push([i,j])
//         }
//     }
//     let i = 0, j = 0;
//     if(G[0])
//     let col = board[0].length;
//     let row = board.length;
//     const directions = [G[1]--,G[1]++,G[0]--,G[0]++]
//     while(true){
//         for(let direction of directions){
//             while(true){
//                 if(!visited && R[0] < row && R[1] < col && !D.includes(R)){
//                     direction;
//                 }
//             }
//         }
//     }
//     return G;
// }

function solution(board) {
    board = board.map(v => v.split(''));
    
    let start, goal;
    let obstacles = new Set();
    const rows = board.length, cols = board[0].length;
    
    // Locate 'R' (start), 'G' (goal), and 'D' (obstacles)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'R') start = [i, j];
            if (board[i][j] === 'G') goal = [i, j];
            if (board[i][j] === 'D') obstacles.add(`${i},${j}`);
        }
    }

    // BFS setup
    const queue = [[...start, 0]]; // [row, col, steps]
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[start[0]][start[1]] = true;
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (queue.length) {
        let [r, c, steps] = queue.shift();
        
        // If we reach 'G', return the number of steps taken
        if (r === goal[0] && c === goal[1]) return steps;
        
        for (let [dr, dc] of directions) {
            let nr = r, nc = c;
            
            // Slide in a direction until hitting an obstacle or wall
            while (
                nr + dr >= 0 && nr + dr < rows &&
                nc + dc >= 0 && nc + dc < cols &&
                !obstacles.has(`${nr + dr},${nc + dc}`)
            ) {
                nr += dr;
                nc += dc;
            }

            if (!visited[nr][nc]) {
                visited[nr][nc] = true;
                queue.push([nr, nc, steps + 1]);
            }
        }
    }

    return -1; // If we never reach 'G'
}
