// const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// const solution = (arrayA, arrayB) => {
//     const gcdA = arrayA.reduce((acc, cur) => gcd(acc, cur));
//     const gcdB = arrayB.reduce((acc, cur) => gcd(acc, cur));
//     const result = [];
// //     for(let i = 2; i <= gcdA; i++){
// //         if(gcdA % i === 0 && arrayB.every((b) => b % i !== 0)){
// //             result.push(i);
// //         }
// //     }
    
// //     for(let i = 2; i <= gcdB; i++){
// //         if(gcdB % i === 0 && arrayA.every((a) => a % i !== 0)){
// //             result.push(i)
// //         }
// //     }
    
//      if(arrayB.every((b) => b % gcdA !== 0)){
//             result.push(gcdA);
//         }
    
    
//      if(arrayA.every((a) => a % gcdB !== 0)){
//             result.push(gcdB);
//         }
    
//     return result.length === 0 ? 0 : Math.max(...result);
    
// }

function solution(arrayA, arrayB) {
    const aResult = getAnswer(arrayA, arrayB)
    const bResult = getAnswer(arrayB, arrayA)

    return aResult > bResult ? aResult : bResult
}

function getAnswer (A, B) {
    A.sort((a, b) => a - b)
    for (let i = A[0]; i > 1; i--) {
        if (A.every(a => a % i === 0) && !B.some(b => b % i === 0)) return i
    }
    return 0
}