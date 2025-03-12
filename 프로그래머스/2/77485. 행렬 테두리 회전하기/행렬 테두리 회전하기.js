const solution = (row, column, queries) => {
    const matrix = [...Array(row)].map((_, r) => [...Array(column)].map((_, c) => r * column + 1 + c));
    const answer = [];
    
    queries.forEach(query => {
        let [x1, y1, x2, y2] = query.map(_ => _ - 1);
        let min = matrix[x1][y1], temp = matrix[x1][y1];
        
        for(let i = x1; i < x2; i++){
            matrix[i][y1] = matrix[i + 1][y1];
            min = Math.min(min, matrix[i][y1]);
        }
        
        for(let i = y1; i < y2; i++){
            matrix[x2][i] = matrix[x2][i + 1];
            min = Math.min(min, matrix[x2][i]);
        }
        
        for(let i = x2; i > x1; i--){
            matrix[i][y2] = matrix[i - 1][y2];
            min = Math.min(min, matrix[i][y2]);
        }
        
        for(let i = y2; i > y1; i--){
            matrix[x1][i] = matrix[x1][i - 1];
            min = Math.min(min, matrix[x1][i])
        }
        matrix[x1][y1+1] = temp;
        answer.push(min)
    })
    
    return answer;
}