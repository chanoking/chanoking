// const solution = (arrayA, arrayB) => {
//     const arrAmin = Math.min(...arrayA);
//     const arrBmin = Math.min(...arrayB);
    
//     const limit = Math.max(arrAmin, arrBmin);
//     let arr = [];
    
//     for(let i = 2; i <= limit; i++){
//         let checkA = arrayA.every((a) => a % i === 0);
//         let checkB = arrayB.every((b) => b % i === 0);
//         let checkC = arrayA.every((a) => a % i !== 0);
//         let checkD = arrayB.every((b) => b % i !== 0);
        
        
//         if(checkC && checkB){
//             arr.push(i);
//         }
        
//         if(checkD && !checkA){
//             arr.push(i);
//         }
//     }
//     return arr.length === 0 ? 0 : Math.max(...arr);
    
// }    
    

// const solution = (arrayA, arrayB) => {
//     const arrAmin = Math.min(...arrayA);
//     const arrBmin = Math.min(...arrayB);
    
//     const limit = Math.min(arrAmin, arrBmin);  // The limit should be the smaller of the two minimums
//     let arr = [];
    
//     for (let i = 2; i <= limit; i++) {
//         let divisibleByA = arrayA.every((a) => a % i === 0);
//         let divisibleByB = arrayB.every((b) => b % i === 0);
        
//         // If all elements of arrayA are divisible by i and none from arrayB are
//         if (divisibleByA && !divisibleByB) {
//             arr.push(i);
//         }
        
//         // If all elements of arrayB are divisible by i and none from arrayA are
//         if (!divisibleByA && divisibleByB) {
//             arr.push(i);
//         }
//     }
    
//     return arr.length === 0 ? 0 : Math.max(...arr);
// };

// const solution = (arrayA, arrayB) => {
//     const arrAmin = Math.min(...arrayA);
//     const arrBmin = Math.min(...arrayB);
    
//     const limit = Math.max(arrAmin, arrBmin);  // Loop until the largest minimum of both arrays
//     let arr = [];
    
//     for (let i = 2; i <= limit; i++) {
//         // Condition 1: All elements of arrayA divisible by i, but none of arrayB divisible by i
//         let divisibleByA = arrayA.every((a) => a % i === 0);
//         let notDivisibleByB = arrayB.every((b) => b % i !== 0);
        
//         if (divisibleByA && notDivisibleByB) {
//             arr.push(i);
//         }
        
//         // Condition 2: All elements of arrayB divisible by i, but none of arrayA divisible by i
//         let divisibleByB = arrayB.every((b) => b % i === 0);
//         let notDivisibleByA = arrayA.every((a) => a % i !== 0);
        
//         if (divisibleByB && notDivisibleByA) {
//             arr.push(i);
//         }
//     }
    
//     return arr.length === 0 ? 0 : Math.max(...arr);
// };


// const solution = (arrayA, arrayB) => {
//     const arrAmin = Math.min(...arrayA);
//     const arrBmin = Math.min(...arrayB);
    
//     const limit = Math.max(arrAmin, arrBmin);  // Limit loop by the smaller minimum
//     let maxDivisor = 0;
    
//     for (let i = limit; i >= 2; i--) {  // Start from the largest possible divisor and loop down
//         let divisibleByA = arrayA.every((a) => a % i === 0);
//         let notDivisibleByB = arrayB.every((b) => b % i !== 0);
        
//         if (divisibleByA && notDivisibleByB) {
//             maxDivisor = i;
//             break;  // Found the largest, exit early
//         }
        
//         let divisibleByB = arrayB.every((b) => b % i === 0);
//         let notDivisibleByA = arrayA.every((a) => a % i !== 0);
        
//         if (divisibleByB && notDivisibleByA) {
//             maxDivisor = i;
//             break;  // Found the largest, exit early
//         }
//     }
    
//     return maxDivisor;
// };
    
// Helper function to generate divisors of a number
// const getDivisors = (num) => {
//     const divisors = new Set();  // Using Set to avoid duplicates
//     for (let i = 1; i * i <= num; i++) {
//         if (num % i === 0) {
//             divisors.add(i);
//             divisors.add(num / i);  // Add the corresponding divisor
//         }
//     }
//     return [...divisors];  // Return as an array
// };

// const solution = (arrayA, arrayB) => {
//     const arrAmin = Math.min(...arrayA);
//     const arrBmin = Math.min(...arrayB);
    
//     // Get all divisors of both the minimums of arrayA and arrayB
//     const divisorsA = getDivisors(arrAmin);
//     const divisorsB = getDivisors(arrBmin);
    
//     // Combine divisors from both arrays and sort in descending order
//     const divisors = [...new Set([...divisorsA, ...divisorsB])].sort((a, b) => b - a);
    
//     // Check for the largest valid divisor
//     for (let i of divisors) {
//         let divisibleByA = arrayA.every((a) => a % i === 0);
//         let notDivisibleByB = arrayB.every((b) => b % i !== 0);
        
//         if (divisibleByA && notDivisibleByB) {
//             return i;  // Return the largest divisor found
//         }
        
//         let divisibleByB = arrayB.every((b) => b % i === 0);
//         let notDivisibleByA = arrayA.every((a) => a % i !== 0);
        
//         if (divisibleByB && notDivisibleByA) {
//             return i;  // Return the largest divisor found
//         }
//     }
    
//     return 0;  // No valid divisor found
// };

// const solution = (arrayA, arrayB) => {
//     const n = Math.max(Math.min(...arrayA), Math.min(...arrayB));
//     const result = [];
//     for(let i = 2; i <= n; i++){
//         let checkA = arrayA.every((a) => a % i === 0);
//         if(checkA){
//             let checkB = arrayB.every((b) => b % i !== 0);
            
//             if(checkB){
//                 result.push(i);
//             }
//         }
//         let checkB = arrayB.every((b) => b % i === 0);
//         if(checkB){
//             let checkA = arrayA.every((a) => a % i !== 0);
//             if(checkA){
//                 result.push(i);
//             }
//         }
//     }
//     return result.length === 0 ? 0 : Math.max(...result);
// }

// 최대 공약수를 구하는 함수
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const solution = (arrayA, arrayB) => {
    // arrayA의 최대 공약수 구하기
    let gcdA = arrayA.reduce((acc, val) => gcd(acc, val));
    // arrayB의 최대 공약수 구하기
    let gcdB = arrayB.reduce((acc, val) => gcd(acc, val));

    const result = [];
    
    // arrayA의 최대 공약수의 약수 중 arrayB의 조건을 만족하는 값 찾기
    for (let i = 2; i <= gcdA; i++) {
        if (gcdA % i === 0 && arrayB.every(b => b % i !== 0)) {
            result.push(i);
        }
    }

    // arrayB의 최대 공약수의 약수 중 arrayA의 조건을 만족하는 값 찾기
    for (let i = 2; i <= gcdB; i++) {
        if (gcdB % i === 0 && arrayA.every(a => a % i !== 0)) {
            result.push(i);
        }
    }

    return result.length === 0 ? 0 : Math.max(...result);
};


// const solution = (arrayA, arrayB) => {
//     const n = Math.max(Math.min(...arrayA), Math.min(...arrayB));
//     let maxResult = 0;
    
//     for(let i = 2; i <= n; i++){
//         let allADivisible = arrayA.every((a) => a % i === 0);
//         let allBNotDivisible = arrayB.every((b) => b % i !== 0);
        
//         if(allADivisible && allBNotDivisible){
//             maxResult = i;
//         }
        
//         let allBDivisible = arrayB.every((b) => b % i === 0);
//         let allANotDivisible = arrayA.every((a) => a % i !== 0);
        
//         if(allBDivisible && allANotDivisible){
//             maxResult = i;
//         }
//     }
    
//     return maxResult === 0 ? 0 : maxResult;
// }

// const solution = (arrayA, arrayB) => {
//     const n = Math.max(Math.min(...arrayA), Math.min(...arrayB));
//     const result = [];
    
//     for (let i = 2; i <= n; i++) {
//         // arrayA의 모든 요소가 i로 나누어 떨어지는지 확인
//         let checkA = arrayA.every((a) => a % i === 0);
//         if (checkA) {
//             // arrayB의 모든 요소가 i로 나누어 떨어지지 않는지 확인
//             let checkBForA = arrayB.every((b) => b % i !== 0);
//             if (checkBForA) {
//                 result.push(i);
//             }
//         }

//         // arrayB의 모든 요소가 i로 나누어 떨어지는지 확인
//         let checkB = arrayB.every((b) => b % i === 0);
//         if (checkB) {
//             // arrayA의 모든 요소가 i로 나누어 떨어지지 않는지 확인
//             let checkAForB = arrayA.every((a) => a % i !== 0);
//             if (checkAForB) {
//                 result.push(i);
//             }
//         }
//     }

//     return result.length === 0 ? 0 : Math.max(...result);
// };





















