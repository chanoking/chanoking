// function solution(data, col, row_begin, row_end) {
//     data.sort((a, b) => {
//         if(a[col - 1] === b[col - 1]){
//             return b[0] - a[0];
//         }else{
//             return a[col - 1] - b[col - 1];   
//         }
//     })
//     const sums = Array(row_end - row_begin + 1).fill(0)
//     for(let i = row_begin - 1; i <= row_end - 1; i++){
//         for(let j = 0; j < 3; j++){
//             sums[i - 1] += data[i][j] % (i + 1);
//         }
//     }
    
//     const xor = (a, b) => {
//         a = a.toString(2);
//         b = b.toString(2);

//         if(a.length > b.length){
//             b = b.padEnd(a.length, "0");
//         }else{
//             a = a.padEnd(b.length, "0");
//         }
        
//         let sum = 0;
//         for(let i = a.length - 1, j = 0; i >= 0; i--, j++){
//             if(b[i] !== a[i]){
//                 sum += (2 ** j) * +b[i];
//                 sum += (2 ** j) * +a[i];
//             }
//         }
        
//         return sum;
//     }
//     const result = xor(sums[row_end - row_begin - 1], sums[row_end - row_begin]);
//     return result;
// }

function solution(data, col, row_begin, row_end) {
    // 1. Sort the data based on the specified column (1-based index)
    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0]; // Descending order for first column
        }
        return a[col - 1] - b[col - 1]; // Ascending order for selected column
    });

    // 2. Compute S_i values
    const sums = Array(row_end - row_begin + 1).fill(0);
    for (let i = row_begin - 1; i <= row_end - 1; i++) {
        for (let j = 0; j < data[i].length; j++) {
            sums[i - row_begin + 1] += data[i][j] % (i + 1);
        }
    }

    // 3. Apply XOR to all computed sums
    let result = sums.reduce((acc, num) => acc ^ num, 0);
    
    return result;
}
