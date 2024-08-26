// // const solution = (survey, choices) => {
// //     const map = {};
// //     const score = {
// //         1: 3, 2 : 2, 3 : 1, 4: 0, 5: 1, 6: 2, 7:3
// //     }
// //     let answer = ''
    
// //     survey.forEach((e,i) => {
// //         const [first, second] = e.split('');
// //         if(choices[i]<4){
// //             map[first] = (map[first] || 0) + score[choices[i]]
// //         }else if(choices[i]>4){
// //             map[second] = (map[second] || 0) + score[choices[i]]
// //         }
// //     })
    
// //    for (let i = 0; i < survey.length; i += 2) {
// //         const [first, second] = survey[i].split('');
// //         if ((map[first] || 0) === (map[second] || 0)) {
// //             answer += first < second ? first : second;
// //         } else {
// //             answer += (map[first] || 0) > (map[second] || 0) ? first : second;
// //         }
// //     }
// //     return answer;
// // }

// const solution = (survey, choices) => {
//     const map = {};
//     const score = {
//         1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3
//     };
//     let answer = '';

//     survey.forEach((e, i) => {
//         const [first, second] = e.split('');
//         if (choices[i] < 4) {
//             map[first] = (map[first] || 0) + score[choices[i]];
//         } else if (choices[i] > 4) {
//             map[second] = (map[second] || 0) + score[choices[i]];
//         }
//     });

//     // Build the answer string based on calculated scores
//     for (let i = 0; i < survey.length; i += 2) {
//         const [first, second] = survey[i].split('');
//         if ((map[first] || 0) === (map[second] || 0)) {
//             answer += first < second ? first : second;
//         } else {
//             answer += (map[first] || 0) > (map[second] || 0) ? first : second;
//         }
//     }

//     return answer;
// };

// const solution = (survey, choices) => {
//     const map = {};
//     const score = {
//         1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3
//     };
//     let answer = '';

//     // Calculate the scores
//     survey.forEach((e, i) => {
//         const [first, second] = e.split('');
//         if (choices[i] < 4) {
//             map[first] = (map[first] || 0) + score[choices[i]];
//         } else if (choices[i] > 4) {
//             map[second] = (map[second] || 0) + score[choices[i]];
//         }
//     });

//     // Determine the personality type based on the specific pairs
//     const pairs = ['RT', 'CF', 'JM', 'AN'];

//     pairs.forEach(pair => {
//         const [first, second] = pair.split('');
//         if ((map[first] || 0) === (map[second] || 0)) {
//             answer += first < second ? first : second;
//         } else {
//             answer += (map[first] || 0) > (map[second] || 0) ? first : second;
//         }
//     });

//     return answer;
// };


// const solution = (survey, choices) => {
//     const map = {};
//     let answer = '';
//     const score = {
//         1:3, 2:2, 3:1,4:0,5:1,6:2,7:3
//     }
//     survey.forEach((e,i) => {
//         const [first, second] = e.split('');
//         if(choices[i] < 4){
//             map[first] = (map[first] || 0) + score[choices[i]];    
//         } else if(choices[i] > 4)
//             map[second] = (map[second] || 0) + score[choices[i]];
//     })
    
//     const pairs = ['RT', 'CF', 'JM', 'AN'];
    
    
//     pairs.forEach((e,i) => {
//         const [first ,second] = e.split('');
//         if((map[first] || 0) === (map[second] || 0)){
//             answer += first < second ? first : second;
//         }else{
//             answer += (map[first] || 0) > (map[second] || 0) ? first : second
//         }
//     })
    
//     return answer;
// }

const solution = (survey, choices) => {
    const map = {};
    let answer = '';
    const score = {1:3, 2:2, 3:1,4:0,5:1,6:2,7:3}
    
    survey.forEach((e,i) => {
        const [first, second] = e.split('');
        if(choices[i] < 4) {
            map[first] = (map[first] || 0) + score[choices[i]]
        } else if(choices[i] > 4){
            map[second] = (map[second] || 0 ) + score[choices[i]]
        }
    })
    
    const pairs = ['RT', 'CF', 'JM', 'AN'];
    
    pairs.forEach((e,i) => {
        const [first, second] = e.split('');
        if((map[first] || 0) === (map[second] || 0)){
            answer += first < second ? first : second;
        }else{
            answer += (map[first] || 0) > (map[second] || 0) ? first : second
        }
    })
    
    return answer;
}


















