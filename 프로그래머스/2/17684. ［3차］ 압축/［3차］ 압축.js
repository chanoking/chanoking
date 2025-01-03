// const solution = (msg) => {
//     const alphabetIndex = Object.fromEntries(Array.from({length : 26}, (_, i) => [String.fromCharCode(65 + i), i + 1]));
//     const result = [];
//     for(let i = 0; i < msg.length; i++){
//         let current = msg[i];
//         let latter = msg[i + 1];
//         let combine = current + latter;
//         let lastArr = Object.values(alphabetIndex);
//         let last = lastArr[lastArr.length - 1];
//         if(!alphabetIndex[combine]){
//             alphabetIndex[combine] = (alphabetIndex[combine] || 1) + last;
//             result.push(alphabetIndex[current])
//         }else{
//             current = combine;
//             latter = msg[i + current.length];
//             combine = current + latter;
//             alphabetIndex[combine] = (alphabetIndex[combine] || 1) + last;
//             result.push(alphabetIndex[current]);
//             i += current.length - 1;
//         }
//     }
//     return result;
// }

// const solution = (msg) => {
//     const alphabetIndex = Object.fromEntries(Array.from({ length: 26 }, (_, i) => [String.fromCharCode(65 + i), i + 1]));
//     const result = [];
//     let nextIndex = 27;  // New indices start from 27 after the alphabet
    
//     let i = 0;
//     while (i < msg.length) {
//         let current = msg[i];
//         let latter = msg[i + 1];
//         let combine = current + latter;
        
//         // If the combination exists in the alphabetIndex, add it to result
//         if (alphabetIndex[combine]) {
//             result.push(alphabetIndex[combine]);
//             i += 2; // Move past the two characters
//         } else {
//             // If the combination doesn't exist, use the current character
//             result.push(alphabetIndex[current]);
//             i++; // Move past the current character
//         }
        
//         // Add the new combination to alphabetIndex if it's not already there
//         if (!alphabetIndex[combine] && i <= msg.length) {
//             alphabetIndex[combine] = nextIndex++;
//         }
//     }
    
//     return result;
// };

// const solution = (msg) => {
//         const alphabetIndex = Object.fromEntries(Array.from({ length: 26 }, (_, i) => [String.fromCharCode(65 + i), i + 1]));
//     const result = [];
//     let lastArr = Object.values(alphabetIndex);
//     let last = lastArr[lastArr.length - 1];
//     for(let i = 0, j = i + 1; i < msg.length;){
//         let w = msg.slice(i, j);
//         let c = msg.slice(j, j + 1);
//         result.push(w);
//         alphabetIndex[w + c] = (alphabetIndex[w + c] || 1) + last;
//     }
// }

const solution = (msg) => {
    let stack = [];
    const capitalAlphabets = Array.from({length : 26}, (_, i) => String.fromCharCode(65 + i));
    const result = [];
    for(let i = 0; i < msg.length; i++){
        stack.push(msg[i]);
        if(capitalAlphabets.includes(stack.join(''))) continue;
        capitalAlphabets.push(stack.join(''));
        stack.pop();
        const index = capitalAlphabets.indexOf(stack.join('')) + 1;
        result.push(index);
        stack = []
        i--;
    }
    const index = capitalAlphabets.indexOf(stack.join('')) + 1;
    result.push(index);
    return result;
}
