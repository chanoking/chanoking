function solution(rows, columns, queries) {
    const matrix = [];
    let absolute = 1;
    for(let i = 0; i < rows; i++){
        const arr = [];
        for(let j = 0; j < columns; j++){
            arr.push(absolute++);
        }
        matrix.push(arr);
    }

    const answer = [];
    queries.forEach(query => {
        const [x1, y1, x2, y2] = query;
        let top = x1 - 1, bottom = x2 - 1, left = y1 - 1, right = y2 - 1;
        let temp, prev, min
        prev = matrix[top][left];
        const tempor = [];
        tempor.push(prev)
        for(let i = left + 1; i <= right; i++){
            temp = matrix[top][i];
            matrix[top][i] = prev;
            prev = temp;
            tempor.push(prev);
        }
        top++;
        
        for(let i = top; i <= bottom; i++){
            temp = matrix[i][right];
            matrix[i][right] = prev;
            prev = temp;
            tempor.push(prev);
        }
        right--;
        
        for(let i = right; i >= left; i--){
            temp = matrix[bottom][i];
            matrix[bottom][i] = prev;
            prev = temp;
            tempor.push(prev);
        }
        
        bottom--;
        for(let i = bottom; i >= top - 1; i--){
            temp = matrix[i][left];
            matrix[i][left] = prev;
            prev = temp;
            tempor.push(prev);
        }
        min = Math.min(... tempor);
        answer.push(min)       
    })
    return answer;
}