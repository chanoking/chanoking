const solution = (board) => {
    const whoWon = (board) => {
        let Owin = false;
        let Xwin = false;
        
        for(let i = 0; i < board.length; i++){
           if((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && board[i][1] !== '.' && board[i][1] === 'O'){
               Owin = true;
           }
            if((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && board[i][1] !== '.' && board[i][1] === 'X'){
               Xwin = true;
           }
            if((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && board[1][i] !== '.' && board[1][i] === 'O'){
                Owin = true;
            }
            if((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && board[1][i] !== '.' && board[1][i] === 'X'){
                Xwin = true;
            }
        }
            if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== '.' && board[1][1] === 'O'){
                Owin = true;
            }
            if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== '.' && board[1][1] === 'X'){
                Xwin = true;
            }
            if(board[0][2] === board[1][1] && board[2][0] === board[1][1] && board[1][1] !== '.' && board[1][1] === 'O'){
                Owin = true;
            }
            if(board[0][2] === board[1][1] && board[2][0] === board[1][1] && board[1][1] !== '.' && board[1][1] === 'X'){
                Xwin = true;
            }
            return [Owin, Xwin];
    }
    if (board.every(row => row === "...")) return 1;
    let O = 0, X = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0 ; j < 3; j++){
            if(board[i][j] === 'O'){
                O++;
            }else if(board[i][j] === 'X'){
                X++;
            }    
        }
    }
    
    if(whoWon(board)[0] && whoWon(board)[1]){
        return 0;  
    }else if(whoWon(board)[0] && (O === X || O < X || O > X + 1)){
        return 0;
    }else if(whoWon(board)[1] && (O > X || O < X)){
        return 0;
    }else{
        return (X > O || O > X + 1) ? 0 : 1;
    }
}
    
    
    
    
    
    
    
    
    
    
    