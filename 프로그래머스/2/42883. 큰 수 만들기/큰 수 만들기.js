// const solution = (number, k) => {
//     const result = [];
//     let digits = number.length;
//     let outcome = digits - k;
//     const getCombine = (start, path) => {
//         if(path.length === outcome){
//             result.push(path.join(''));
//             return
//         }
//         for(let i = start; i < number.length; i++){
//             getCombine(i + 1, path.concat(number[i]));
//         }
//     }
//     getCombine(0, []);
//     const max = Math.max(...result);
//     return String(max);
// }

const solution = (number, k) => {
    const stack = [];
    let removeCount = k;
    for(let digit of number){
        while(removeCount > 0 && stack.length > 0 && stack[stack.length - 1] < digit){
            stack.pop();
            removeCount--;
        }
        stack.push(digit);
    }
    return stack.slice(0, number.length - k).join('');
}