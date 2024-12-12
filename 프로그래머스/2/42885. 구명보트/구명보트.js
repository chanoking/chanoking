// const solution = (people, limit) => {
//     let count = 0;
//     let adjusted = people.sort((a, b) => a - b);
//     for(let i = adjusted.length; i > 0;){
//         const bundle = adjusted.slice(0, i);
//         const sum = bundle.reduce((acc, cur) => acc + cur, 0);
//         if(sum <= limit) {
//             count++;
//             i -= bundle.length;
//         }else{
//             i--;
//             count++;
//         }
//     }
//     return count;
// }

// const solution = (people, limit) => {
//     let count = 0;
//     let left = 0;
//     let right = people.length - 1;
//     const sorted = people.sort((a, b) => a - b);
//     while(left <= right){
//         if((sorted[left] + sorted[right]) <= limit){
//             left++;
//         }
//         right--;
//         count++;
//     }
//     return count;
// }

const solution = (people, limit) => {
    people.sort((a,b) => a - b);
    for(var i = 0, j = people.length - 1; i < j; j--){
        if((people[i] + people[j]) <= limit) i++;
    }
    return people.length - i;
}