// const solution = (targets) => {
//     targets.sort((a,b) => a[0] - b[0]);
//     const point = (targets) => {
//         const record = {};
//         for(let i = 1; i < Math.max(...targets.map(target => target[1])); i++){
//             for(let j = 0; j < targets.length; j++){
//                 if(targets[j][0] <= i && targets[j][1] >= i + 1){
//                     record[`${i}-${i+1}`] = (record[`${i}-${i+1}`] || 0) + 1;
//                 }
//             }
//         }
//         return record;
//     }

//     let count = 0;
//     while(targets.length > 1){
//         for(let e in point(targets)){
//             let chance = Math.max(...Object.values(point(targets)));
//             if(point(targets)[e] === chance){
//                 count += 1;
//                 let [s, f] = e.split('-').map(Number);
//                 for(let j = 0; j < targets.length; j++){
//                     if(targets[j][0] <= s && targets[j][1] >= f){
//                         targets.splice(j, 1);
//                     }
//                 }
//             }
//         }
//     }
//     return count;
// }

const solution = (targets) => {
    targets.sort((a, b) => a[1] - b[1]); // sort by end point
    let count = 0;
    let end = -Infinity;

    for (const [start, finish] of targets) {
        if (start > end) {
            count++;
            end = finish - 1; // place the "missile" (or point) just before the end
        }
    }
    return count;
}
