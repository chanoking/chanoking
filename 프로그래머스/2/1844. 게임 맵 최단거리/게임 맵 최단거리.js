// const solution = (maps) => {
    
// const shortestPath = (grid) => {
//     const rows = grid.length;
//     const cols = grid[0].length;
    
//     // If start or end point is a wall, return -1
//     if (grid[0][0] === 0 || grid[rows - 1][cols - 1] === 0) return -1;

//     const directions = [
//         [-1, 0], [1, 0], [0, -1], [0, 1] // Up, Down, Left, Right
//     ];
    
//     const queue = [[0, 0, 1]]; // Format: [row, col, steps]
//     const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
//     visited[0][0] = true;

//     while (queue.length > 0) {
//         const [row, col, steps] = queue.shift();
        
//         // If we've reached the end point
//         if (row === rows - 1 && col === cols - 1) return steps;

//         for (const [dRow, dCol] of directions) {
//             const newRow = row + dRow;
//             const newCol = col + dCol;

//             // Check boundaries, wall, and visited cells
//             if (
//                 newRow >= 0 && newRow < rows &&
//                 newCol >= 0 && newCol < cols &&
//                 grid[newRow][newCol] === 1 &&
//                 !visited[newRow][newCol]
//             ) {
//                 visited[newRow][newCol] = true;
//                 queue.push([newRow, newCol, steps + 1]);
//             }
//         }
//     }

//     // If we exit the loop without finding the end point
//     return -1;
//     }
//     return shortestPath(maps);
// }

const solution = (maps) => {
    const shortestPath = (grid) => {
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = Array.from({length : rows}, () => Array(cols).fill(false));
        const queue = [[0, 0, 1]];
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        visited[0][0] = true;
        while(queue.length){
            const [row, col, steps] = queue.shift();
            
            if(row === rows - 1 && col === cols - 1) return steps;
            for(let [dRow, dCol] of directions){
                const newRow = row + dRow;
                const newCol = col + dCol;
                
                if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited[newRow][newCol] && grid[newRow][newCol] === 1){
                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol, steps + 1])
                }
            }
        }
        return -1;
    }
    return shortestPath(maps);
}
























