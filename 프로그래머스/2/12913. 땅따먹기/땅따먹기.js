// const solution = (land) => {
//     const cols = land[0].length;
//     const rows = land.length;
//     let dp = [...land[0]];
//     for(let i = 1; i < rows; i++){
//         let newDp = Array(cols).fill(0);
//         for(let j = 0; j < cols; j++){
//             let maxPrev = 0;
//             for(let k = 0; k < cols; k++){
//                 if(j !== k){
//                     maxPrev = Math.max(maxPrev, dp[k]);
//                 }
//             }
//             newDp[j] = land[i][j] + maxPrev;
//         }
//         dp = newDp;
//     }
//     return Math.max(...dp);
// }

function solution(land) {
    var answer = 0;

    return Math.max(...land.reduce((a, c) => {
        return [
            c[0] + Math.max(a[1], a[2], a[3]),  
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[0], a[1], a[3]),
            c[3] + Math.max(a[0], a[1], a[2]),
        ];
    }, [0, 0, 0, 0]));
}