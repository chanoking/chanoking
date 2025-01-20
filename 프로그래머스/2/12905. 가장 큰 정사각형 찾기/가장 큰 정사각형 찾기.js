// const solution = (board) => {
//     const records = Array.from({length : board.length}, () => []);
//     for(let i = 0; i < board.length; i++){
//         for(let j = 0; j < board[0].length; j++){
//             if(board[i][j] === 1){
//                 records[i].push(j);
//             }
//         }
//     }
//     const findMaxOverLapRow = (inputArray) => {
//         const isSubset = (small, large) => {
//             return small.every(val => large.includes(val))
//         }
        
//         const rowCounts = new Map();
        
//         for(const row of inputArray){
//             for(const compareRow of inputArray){
//                 if(isSubset(row, compareRow)){
//                     const key = row.join(',');
//                     rowCounts.set(key, (rowCounts.get(key) || 0) + 1);
//                 }
//             }
//         }
        
//         for(const [key, count] of rowCounts){
//             const row = key.split(',').map(Number);
//             if(count === row.length){
//                 return row.length
//             }
//         }
//         return null;
//     }
    
//     const len = findMaxOverLapRow(records);
//     return len * len;
// }

// const solution = (board) => {
//     const rows = board.length;
//     const cols = Math.max(...board.map(row => row.length));
    
//     // Convert each row into a bitmask
//     const bitmasks = board.map(row => {
//         let mask = 0;
//         for (let j = 0; j < row.length; j++) {
//             if (row[j] === 1) {
//                 mask |= (1 << j); // Set the bit at position j
//             }
//         }
//         return mask;
//     });

//     // Count occurrences of each bitmask
//     const bitmaskCounts = new Map();
//     for (const mask of bitmasks) {
//         bitmaskCounts.set(mask, (bitmaskCounts.get(mask) || 0) + 1);
//     }

//     // Find the largest square
//     let maxSquare = 0;
//     for (const [mask, count] of bitmaskCounts) {
//         const bitCount = mask.toString(2).replace(/0/g, "").length; // Count set bits (1s)
//         if (count >= bitCount) {
//             maxSquare = Math.max(maxSquare, bitCount * bitCount);
//         }
//     }

//     return maxSquare;
// };

const solution = (board) => {
    const rows = board.length;
    const cols = board[0].length;
    
    // DP table to store the size of the largest square ending at each cell
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxSquare = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 1) {
                // If it's the first row or first column, the square size is 1
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    // Take the minimum of the top, left, and top-left diagonal + 1
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                // Update the largest square size found so far
                maxSquare = Math.max(maxSquare, dp[i][j]);
            }
        }
    }
    
    // Return the area of the largest square (side * side)
    return maxSquare * maxSquare;
};
