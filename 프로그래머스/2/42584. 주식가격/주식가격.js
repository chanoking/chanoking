// const solution = (prices) => {
//     let count = 0;
//     const result = [];
//     for(let i = 0; i < prices.length; i++){
//         let current = prices[i];
//         count = 0;
//         for(let j = i + 1; j < prices.length; j++){
//             if(current <= prices[j]) count++           
//         }
//         result.push(count)
//     }
//     return result;
// }

const solution = (prices) => {
    const result = Array(prices.length).fill(0);
    const stack = [];
    for(let i = 0; i < prices.length; i++){
        while(stack.length && prices[i] < prices[stack[stack.length - 1]]){
            const topIndex = stack.pop();
            result[topIndex] = i - topIndex;
            
        }
        stack.push(i);
    }
    
    while(stack.length){
        const topIndex = stack.pop();
        result[topIndex] = prices.length - 1 - topIndex; 
    }
    return result;
}