// const solution = (n) => {
//     let count = 0;
//     let is = 0;
//     while(is <= n){
//         is++;
//         let acc = 0;
//         for(let i = is; i <= n; i++){
//             acc += i;
//             if(acc === n) count++;
//         }
//     }
//     return count;
// }

// const solution = (n) => {
//     let count = 0;
//     for(let x = 1; x <=n; x++){
//         for(let k = 1; k <= n; k++){
//             if(n === (k * x + k * ((k - 1) / 2))) count++;
//         }
//     }
//     return count;
// }

const solution = (n) => {
    let count = 0;
    for(let k = 1;  (k * (k - 1))/2 < n; k++){
        let numerator = n - (k * (k - 1))/2;
        if(numerator % k === 0) count++;
    }
    return count;
}