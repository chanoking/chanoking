const solution = (n) => {
    const board = Array.from({length: n}, () => Array(n).fill("."));
    const answer = [];
    const isSafe = (r, c) => {
        for(let row = r - 1, col = c - 1; row >= 0 && col >= 0; row--, col--){
            if(board[row][col] === 'Q') return false;
        }
        for(let row = r - 1, col = c + 1; row >= 0 && col < n; row--, col++){
            if(board[row][col] === "Q") return false
        }
        for(let i = 0; i < r; i++){
            if(board[i][c] === 'Q')return false;
        }
        return true;
    }
    
    const backtrack = (row) => {
        if(row === n){
            answer.push(board.map(r => r.join('')));
            return
        }
        for(let col = 0; col < n; col++){
            if(isSafe(row, col)){
                board[row][col] = 'Q';
                backtrack(row+1);
                board[row][col] = '.'
            }
        }
    }
    
    backtrack(0);
    return answer.length;
}