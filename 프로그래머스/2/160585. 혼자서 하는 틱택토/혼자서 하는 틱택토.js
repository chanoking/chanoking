// const solution = (board) => {
//     for(let i = 0; i < board.length; i++){
//        if((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && board[i][1] !== '.'){
//            return 0;
//        }
//         if((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && board[1][i] !== '.'){
//             return 0;
//         }
//     }
//     if(((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && board[1][1] !== '.') || ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && board[1][1] !== '.')){
//         return 0
//     }
//    if (board.every(row => row === "...")) return 1;
//     let O = 0, X = 0;
//     for(let i = 0; i < board.length; i++){
//         for(let j = 0 ; j < 3; j++){
//             if(board[i][j] === 'O'){
//                 O++;
//             }else if(board[i][j] === 'X'){
//                 X++;
//             }    
//         }
//     }
//     return (O < X || O > X + 1) ? 0 : 1; 
// }

const solution = (board) => {
    let O = 0, X = 0;

    // Count 'O' and 'X'
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'O') O++;
            if (board[i][j] === 'X') X++;
        }
    }

    // Rule 1: 'X' should never be more than 'O' & 'O' shouldn't be ahead by more than 1
    if (X > O || O > X + 1) return 0;

    let winO = false, winX = false;

    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            if (board[i][0] === 'O') winO = true;
            if (board[i][0] === 'X') winX = true;
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            if (board[0][i] === 'O') winO = true;
            if (board[0][i] === 'X') winX = true;
        }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        if (board[0][0] === 'O') winO = true;
        if (board[0][0] === 'X') winX = true;
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        if (board[0][2] === 'O') winO = true;
        if (board[0][2] === 'X') winX = true;
    }

    // Rule 2: Both 'O' and 'X' cannot win at the same time
    if (winO && winX) return 0;

    // Rule 3: If 'X' wins, 'O' and 'X' must have the same count
    if (winX && O !== X) return 0;

    // Rule 4: If 'O' wins, 'O' should have exactly one more move than 'X'
    if (winO && O !== X + 1) return 0;

    return 1;
};
