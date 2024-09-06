// const solution = (n) => {
//     let count = 0;
//     const answer = []
//     const arr = Array.from({length : n},(v,i) => i + 1);
    
    
//     const isPrime = (n) => {
//         if(n === 1){
//             return false;
//         }
//         for(let i = 2; i < n; i++){
//             if(n % i === 0){
//                 return false;
//             }
                
//         }
    
//         return true;
//     }
//     return arr.filter((v,i) => isPrime(v)).length
// }
               


// const solution = (n) => {
//     const arr = Array.from({length : n}, (v,i) => i + 1);
    
//     const isPrime = (num) => {
//         if(num === 1){
//             return false;
//         }
//         for(let i = 2; i <= Math.sqrt(num); i++){
//             if(num % i === 0){
//                 return false;
//             }
//         }
//         return true;
//     }
    
//     return arr.filter((v) => isPrime(v)).length;
// }

// const solution = (n) => {
//     const isPrime = Array(n+1).fill(true);
    
//     isPrime[0] = isPrime[1] = false;
    
//     for(let i = 2; i * i <= n; i++){
//         if(isPrime[i]){
//             for(let j = i * i; j <= n; j += i){
//                 isPrime[j] = false;
//             }
//         }
//     }
    
//     return isPrime.filter(Boolean).length
// }

const solution = (n) => {
    const isPrime = Array(n+1).fill(true);
    
    isPrime[0] = isPrime[1] = false;
    
    for(let i = 2; i * i <= n; i++){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(Boolean).length;
}
















































