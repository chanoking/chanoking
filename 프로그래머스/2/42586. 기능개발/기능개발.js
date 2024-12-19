// const solution = (progresses, speeds) => {
//     const charge = (remaining, speed) => {
//         const needed = 100 - remaining;
//         const days = Math.ceil(needed / speed);
//         return days;
//     }
//     const result = [];
//     const pairs = Array.from({length: progresses.length}, () => []);
//     progresses.forEach((progress, index) => pairs[index].push(progress));
//     speeds.forEach((speed, index) => pairs[index].push(speed));
//     const left = pairs.map(([progress, speed]) => charge(progress, speed));
//     let arr = [];
//     while(left.length){
//         arr = [];
//         let element = left.shift();
//         if(element < left[0] && left.length){
//             arr.push(element);
//         }else{
//             arr.push(element);
//             while(element > left[0] && left.length) {
//                 arr.push(left.shift());
//             }   
//         }
//         result.push(arr.length);
//     }
//     return result;
// }

const solution = (progresses, speeds) => {
    const remainingDays = progresses.map((progress, index) => 
                                        Math.ceil((100 - progress) / speeds[index]));
    const result = [];
    let currentMax = remainingDays[0];
    let count = 0;
    
    for(let i = 0; i < remainingDays.length; i++){
        if(remainingDays[i] <= currentMax){
            count++;
        }else{
            result.push(count);
            currentMax = remainingDays[i];
            count = 1;
        }
    }
    result.push(count);
    return result;
}