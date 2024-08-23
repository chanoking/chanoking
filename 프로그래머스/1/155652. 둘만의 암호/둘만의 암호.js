// const solution = (s, skip, index) => {
//     let answer = '';
//     const arr = []
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     for(const ss of s){
//         // arr.push(alphabet[alphabet.indexOf(ss) + index])
//         skip.includes(alphabet[alphabet.indexOf(ss)+index]) ? answer += alphabet[alphabet.indexOf(ss)+index +1] : answer += alphabet[alphabet.indexOf(ss)+index] 
//     }
//     return answer;
// }

// const solution = (s, skip, index) => {
//     let arr = [];
//     let ans = ''
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     for(const ss of s){
//         for(let i = alphabet.indexOf(ss) + 1; i <= index; i++){
//             if(skip.includes(alphabet[i])){
//                 arr.push(alphabet[i++])
//                 index++
//             }
//             arr.push(alphabet[i])
//         }
//     }
//     return arr.filter((e) => !skip.includes(e))
//     ans += 
// }

// const solution = (s, skip, index) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let answer = '';
    
//     for(const ss of s){
//         let currentIndex = alphabet.indexOf(ss);
//         let steps = 0;
        
//         while(steps < index){
//             currentIndex = (currentIndex + 1) % alphabet.length;
//             if(!skip.includes(alphabet[currentIndex])){
//                 steps++
//             }
//         }
//         answer += alphabet[currentIndex]
//     }
//     return answer;
// }

// // const solution = (s, skip, index) => {
// //     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// //     let ans = '';

// //     for (const ss of s) {
// //         let currentIndex = alphabet.indexOf(ss);
// //         let steps = 0;

// //         while (steps < index) {
// //             currentIndex = (currentIndex + 1) % alphabet.length; // 알파벳 순환
// //             if (!skip.includes(alphabet[currentIndex])) {
// //                 steps++;
// //             }
// //         }
// //         ans += alphabet[currentIndex];
// //     }

// //     return ans;
// // }

// const solution = (s, skip, index) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let answer = '';
    
//     for(const ss of s){
//         let steps = 0;
//         let currentIndex = alphabet.indexOf(ss);
        
//         while(steps < index){
//             currentIndex = (currentIndex + 1) % alphabet.length;
//             if(!skip.includes(alphabet[currentIndex])){
//                 steps++
//             }
//         }
//         answer += alphabet[currentIndex]
//     }
//     return answer;
// }

const solution = (s, skip, index) => {
    let answer = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for(const ss of s) {
        let steps = 0;
        let currentIndex = alphabet.indexOf(ss);
        
        while(steps < index) {
            currentIndex = (currentIndex + 1) % alphabet.length;
            if(!skip.includes(alphabet[currentIndex])){
                steps++;
            }
        }
        
        answer += alphabet[currentIndex];
    }
    
    return answer;
}
























