// const solution = (keymap, targets) => {
//     let count = 0;
//     const result = [];
    
//     keymap.forEach((key) => {
//         result.push(...key)
//     })
    
//     return result;
    

// }

// const solution = (keymap, targets) => {
//     let count = 0
//     const answer = []
//     for(let i = 0; i < keymap.length; i++){
//         for(let j = 0; j < targets.length; j++){
//             for(let k = 0; k < keymap[i].length; k++){
//                 keymap[i][k] === targets[i][k] ? count++ : count;
//             }
//         }
//         answer.push(count)
//     }
    
//     return answer.reduce((acc,curr) => acc + curr) === 0 ? [-1] : answer;
//     }

// const solution = (keymap, targets) => {
//     const answer = []
//     for(let target of targets){
//         let count = 0;
        
//         for(let char of target){
//             let minPress = Infinity;
            
//             for(let key of keymap){
//                 const index = key.indexOf(char);
//                 if(index !== -1){
//                 minPress = Math.min(minPress, index + 1);                   
//                 }
//             }   
//             if(minPress === Infinity){
//                 count = -1
//                 break
//             }else{
//                 count += minPress
//             }         
//         }
//         answer.push(count)
//     }
    
//     return answer;
// }


// const solution = (keymap, targets) => {
//     const answer = [];

//     // 각 타겟 문자열에 대해 반복
//     for (let target of targets) {
//         let count = 0;

//         // 각 타겟 문자열의 문자에 대해 반복
//         for (let char of target) {
//             let minPress = Infinity;

//             // keymap의 각 키에 대해 반복하여 최소 클릭 수를 찾기
//             for (let key of keymap) {
//                 const index = key.indexOf(char);
//                 if (index !== -1) {
//                     minPress = Math.min(minPress, index + 1); // 1부터 시작하므로 +1
//                 }
//             }

//             if (minPress === Infinity) {
//                 count = -1;
//                 break;
//             } else {
//                 count += minPress;
//             }
//         }

//         answer.push(count);
//     }

//     return answer;
// };


const solution = (keymap, targets) => {
    const answer = [];
    
    for(let target of targets){
        let count = 0;
        
        for(let char of target){
            let minPress = Infinity;
            
            for(let key of keymap){
                const index = key.indexOf(char);
                
                if(index !== -1){
                    minPress = Math.min(minPress, index+1)
                }
            }
            
            if(minPress === Infinity){
                count = -1;
                break;
            }else{
                count += minPress
            }
        }
        answer.push(count)
    }
    return answer;
}