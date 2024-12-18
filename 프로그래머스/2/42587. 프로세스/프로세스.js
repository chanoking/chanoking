// const solution = (priorities, location) => {
//     let count = 0;
//     let copied = [...priorities];
//     let execution = [];
//     const waiting = [];
//     const indexArr = Array.from({length: priorities.length}, (_, i) => i);
//     while(priorities.length){
//         const element = priorities.pop();
//         const max = Math.max(...priorities);
//         let wMax = waiting.length === 0 ? 0 :Math.max(...waiting);
//         if(max > element){
//           waiting.unshift(element);  
//         }
//         if(element < wMax){
//             execution.push(waiting.pop());
//             count++;
//         }else{
//             execution.push(element);
//             count++;
//         }
//         if(element === copied[location]){
//             count++;
//             return count;
//         }
        
//     }
// }

const solution = (priorities, location) => {
    let queue = priorities.map((priority, index) => ({priority, index}));
    let count = 0;
    while(queue.length){
        const current = queue.shift();
        const hasHigherPriority = queue.some(item => item.priority > current.priority);
        if(hasHigherPriority){
            queue.push(current);
        }else{
            count++;
            if(current.index === location){
                return count;
            }
        }
    }
    return -1;
}