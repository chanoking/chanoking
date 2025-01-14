// const solution = (arr1, arr2) => {
//     const colA = arr1[0].length;
//     const rowA = arr1.length;
//     const colB = arr2[0].length;
//     const rowB = arr2.length;
//     const result = Array.from({length: rowA}, () => Array(colB).fill(0));
//     for(let i = 0; i < rowA; i++){
//         for(let j = 0; j < colB; j++){
//             for(let k = 0; k < colA; k++){
//                 result[i][j] += arr1[i][k] * arr2[k][j];
//             }
//         }
//     }
//     return result;
// }

// function solution(arr1, arr2) {
//     return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
// }

const solution = (arr1, arr2) => {
    return arr1.map(row => arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0)));
}



















