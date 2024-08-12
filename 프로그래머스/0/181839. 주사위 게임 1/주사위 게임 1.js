// const solution = (a, b) => {
//     if(a % 2 !== 0 && a % 2 !== 0){
//         return a ** 2 + b ** 2
//     }else if(a % 2 !== 0 || b % 2 !== 0){
//         return 2 * (a + b)
//     } else{
//         return Math.abs(a - b);
//     }
// }

const solution = (a, b) => {
    if(a % 2 === 0 && b % 2 === 0){
        return Math.abs(a-b)
    }else if(a % 2 !== 0 && b % 2 !== 0){
        return a ** 2 + b ** 2;
    }else{
        return 2 * (a + b)
    }
}