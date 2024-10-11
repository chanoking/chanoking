// const solution = (queue1, queue2) => {
//     let result = 0;
//     const total = [...queue1, ...queue2].reduce((acc, cur) => acc + cur);
//     const need = total / 2;
//     let reduce1 = queue1.reduce((acc,cur) => acc + cur);
//     let reduce2 = queue2.reduce((acc,cur) => acc + cur);
//     while(reduce1 !== need || reduce2 !== need){
//         queue1.push(queue2.shift())
//         result++
//         queue2.push(queue1.shift())
//         result++
//         if(queue1.length === 0 || queue2.length === 0) return -1;
//     }
//     return result;
// }

const solution = (queue1, queue2) => {
    const combined = [...queue1, ...queue2];
    const totalSum = combined.reduce((acc, cur) => acc + cur);
    
    if (totalSum % 2 !== 0) return -1;  // Return -1 if total sum is odd
    
    const target = totalSum / 2;
    let sum1 = queue1.reduce((acc, cur) => acc + cur);
    let i = 0, j = queue1.length, result = 0;
    
    while (i < combined.length && j < combined.length * 2) {
        if (sum1 === target) return result;
        else if (sum1 > target) sum1 -= combined[i++];
        else sum1 += combined[j++ % combined.length];
        
        result++;
    }
    
    return -1;  // Return -1 if balance can't be achieved
};


