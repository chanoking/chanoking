// const solution = (numbers, hand) => {
//     const keypad = {
//         1: [0, 0], 2: [0, 1], 3: [0, 2],
//         4: [1, 0], 5: [1, 1], 6: [1, 2],
//         7: [2, 0], 8: [2, 1], 9: [2, 2],
//         '*': [3, 0], 0: [3, 1], '#': [3, 2]
//     };

//     const possibleLeft = ['1', '4', '7'];
//     const possibleRight = ['3', '6', '9'];
//     let answer = [];
//     let leftHand = keypad['*']; // left starting point
//     let rightHand = keypad['#']; // right starting point
    
//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i].toString();

//         if (possibleLeft.includes(num)) {
//             answer.push('L');
//             leftHand = keypad[num];
//         } else if (possibleRight.includes(num)) {
//             answer.push('R');
//             rightHand = keypad[num];
//         } else {
//             const targetPos = keypad[num];
            
//             // Calculate the Manhattan distance from left and right hand positions
//             const leftDistance = Math.abs(leftHand[0] - targetPos[0]) + Math.abs(leftHand[1] - targetPos[1]);
//             const rightDistance = Math.abs(rightHand[0] - targetPos[0]) + Math.abs(rightHand[1] - targetPos[1]);

//             if (leftDistance < rightDistance) {
//                 answer.push('L');
//                 leftHand = targetPos;
//             } else if (rightDistance < leftDistance) {
//                 answer.push('R');
//                 rightHand = targetPos;
//             } else {
//                 if (hand === 'left') {
//                     answer.push('L');
//                     leftHand = targetPos;
//                 } else {
//                     answer.push('R');
//                     rightHand = targetPos;
//                 }
//             }
//         }
//     }

//     return answer.join('');
// }

// const solution = (numbers, hand) => {
//     const keypad = {
//         1: [0, 0], 2: [0, 1], 3: [0, 2],
//         4: [1, 0], 5: [1, 1], 6: [1, 2],
//         7: [2, 0], 8: [2, 1], 9: [2, 2],
//         '*': [3, 0], 0: [3, 1], '#': [3, 2]
//     };

//     const possibleLeft = [1, 4, 7];
//     const possibleRight = [3, 6, 9];
//     let answer = [];
//     let leftHand = keypad['*']; // left starting point
//     let rightHand = keypad['#']; // right starting point
    
//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i];  // num is now a number, not a string

//         if (possibleLeft.includes(num)) {
//             answer.push('L');
//             leftHand = keypad[num];
//         } else if (possibleRight.includes(num)) {
//             answer.push('R');
//             rightHand = keypad[num];
//         } else {
//             const targetPos = keypad[num];
            
//             // Calculate the Manhattan distance from left and right hand positions
//             const leftDistance = Math.abs(leftHand[0] - targetPos[0]) + Math.abs(leftHand[1] - targetPos[1]);
//             const rightDistance = Math.abs(rightHand[0] - targetPos[0]) + Math.abs(rightHand[1] - targetPos[1]);

//             if (leftDistance < rightDistance) {
//                 answer.push('L');
//                 leftHand = targetPos;
//             } else if (rightDistance < leftDistance) {
//                 answer.push('R');
//                 rightHand = targetPos;
//             } else {
//                 if (hand === 'left') {
//                     answer.push('L');
//                     leftHand = targetPos;
//                 } else {
//                     answer.push('R');
//                     rightHand = targetPos;
//                 }
//             }
//         }
//     }

//     return answer.join('');
// }

const solution = (numbers, hand) => {
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };
    
    const possibleLeft = [1, 4, 7];
    const possibleRight = [3, 6, 9];
    
    let answer = [];
    
    let leftHand = keypad['*']; // left starting point
    let rightHand = keypad['#']; // right starting point
    
    for (let i = 0; i < numbers.length; i++){
        const num = numbers[i];
        
        if(possibleLeft.includes(num)){
            answer.push('L');
            leftHand = keypad[num];
        } else if(possibleRight.includes(num)){
            answer.push('R');
            rightHand = keypad[num];
        } else {
            const targetPos = keypad[num]
            
        // Calculate the Manhattan distance from left and right hand positions
            const leftDistance = Math.abs(leftHand[0] - targetPos[0]) + Math.abs(leftHand[1] - targetPos[1]);
            const rightDistance = Math.abs(rightHand[0] - targetPos[0]) + Math.abs(rightHand[1] - targetPos[1]);
            
            if(leftDistance < rightDistance){
                answer.push('L');
                leftHand = targetPos;
            } else if(rightDistance < leftDistance){
                answer.push('R');
                rightHand = targetPos;
            } else {
                if(hand === 'left'){
                    answer.push('L')
                    leftHand = targetPos;
                }else{
                    answer.push('R');
                    rightHand = targetPos;
                }
            }  
        }
    }
    
    return answer.join('');
};
























