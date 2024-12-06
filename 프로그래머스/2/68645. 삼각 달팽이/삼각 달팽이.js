const solution = (n) => {
    const result = [];
    const triangle = [];
    for (let i = 1; i <= n; i++) {
        triangle.push(Array(i).fill(0));
    }

    let row = 0, col = 0;
    let num = 1;
    let direction = 0; // 0: 아래, 1: 오른쪽, 2: 위쪽 대각선

    while (num <= (n * (n + 1)) / 2) {
        triangle[row][col] = num++;
        if (direction === 0) { // 아래로 이동
            if (row + 1 < n && triangle[row + 1][col] === 0) {
                row++;
            } else {
                direction = 1; // 방향 전환
                col++;
            }
        } else if (direction === 1) { // 오른쪽 이동
            if (col + 1 < triangle[row].length && triangle[row][col + 1] === 0) {
                col++;
            } else {
                direction = 2; // 방향 전환
                row--;
                col--;
            }
        } else if (direction === 2) { // 위쪽 대각선 이동
            if (row - 1 >= 0 && col - 1 >= 0 && triangle[row - 1][col - 1] === 0) {
                row--;
                col--;
            } else {
                direction = 0; // 방향 전환
                row++;
            }
        }
    }

    for(let i = 0; i < triangle.length; i++){
        for(let j = 0; j < triangle[i].length; j++){
            result.push(triangle[i][j])
        }
    }
    return result;
};
