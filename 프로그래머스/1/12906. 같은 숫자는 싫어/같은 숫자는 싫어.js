// const solution = (arr) => {
//     let answer = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i+1]){
//             answer.push(arr[i])
//         }
//     }
//     return answer;
// }

const solution = (arr) => {
    return arr.filter((v,i) => v !== arr[i+1])
}