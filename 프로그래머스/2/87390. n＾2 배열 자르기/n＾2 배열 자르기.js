// const solution = (n, left, right) => {
//     const arr = Array.from({length: n}, () => Array(n).fill(0));
//     let num = 1
//     const numb = Array.from({length: n}, (_,i) => i);
//     let ni = 0;
//     const result = [];
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             numb.forEach((n) => {
//                 if(i === n || j === n) arr[i][j] = n + 1;
//             })
//         }
//     }
//     arr.forEach((a) => a.forEach(b => result.push(b)))
//     return result.slice(left, right + 1);
// }

// const solution = (n, left, right) => {
//     const result = [];
//     for (let k = left; k <= right; k++) {
//         const i = Math.floor(k / n);
//         const j = k % n;
//         result.push(Math.max(i, j) + 1);
//     }
//     return result;
// };

const solution = (n, left, right) => {
    const result = [];
    for(let k = left; k <= right; k++){
        const i = Math.floor(k / n); // 행
        const j = k % n; //열
        result.push(Math.max(i,j)+1);
    }
    
    return result;
}
























