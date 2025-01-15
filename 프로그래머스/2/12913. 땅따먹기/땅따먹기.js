// function solution(grid) {
//     const rows = grid.length;
//     const cols = grid[0].length;
//     let dp = [...grid[0]];  // Initialize with the first row

//     for (let i = 1; i < rows; i++) {
//         let newDp = new Array(cols).fill(0);
//         for (let j = 0; j < cols; j++) {
//             let maxPrev = 0;
//             if (j > 0) maxPrev = Math.max(maxPrev, dp[j - 1]); // Left diagonal
//             if (j < cols - 1) maxPrev = Math.max(maxPrev, dp[j + 1]); // Right diagonal
//             newDp[j] = grid[i][j] + maxPrev;
//         }
//         dp = newDp;
//     }

//     return Math.max(...dp); // Return the max value in the last row
// }

function solution(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let dp = [...grid[0]];  // Initialize with the first row

    for (let i = 1; i < rows; i++) {
        let newDp = new Array(cols).fill(0);
        for (let j = 0; j < cols; j++) {
            let maxPrev = 0;
            for (let k = 0; k < cols; k++) {
                if (k !== j) { // Ensure not stepping on the same column
                    maxPrev = Math.max(maxPrev, dp[k]);
                }
            }
            newDp[j] = grid[i][j] + maxPrev;
        }
        dp = newDp;
    }

    return Math.max(...dp); // Return the max value in the last row
}