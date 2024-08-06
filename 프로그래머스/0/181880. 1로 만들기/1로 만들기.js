// const solution = (num_list) => {
//     let count = 0;
//     while(!(num_list.every((e) => e === 1))){
//         num_list = num_list.map((e) => {
//         if(e%2===0){
//             count += 1;
//             return e / 2
//         }else{
//             count += 1
//             return (e - 1) / 2
//         }
//     })        
//     }

//     return count;
// }

// const solution = (num_list) => {
//     let count = 0;
//     let num_listing = [-1]
//     while (!(num_listing.every((e) => e === 1))) {
//         num_listing = [...num_list]
//         num_list = num_list.map((e) => {
//             count += 1;
//             return (e % 2 === 0) ? e / 2 : (e - 1) / 2;
//         });
//     }

// //     return count;
// // }

// const solution = (num_list) => {
//     let count = 0;
//     let arr = [];
//     arr.length = num_list.length
//     arr.fill(1);
//     while(arr.every((e,i) => e !== num_list[i])){
//         count += 1;
//         num_list = num_list.map((e) => e % 2 === 0 ? e / 2 : (e-1) / 2)
//     }
//         return count;
// }

// const solution = (num_list) => {
//   let count = 0;
//   while (num_list.every((e) => e !== 1)) {
//     num_list = num_list.map((e) => {
//       if (e % 2 === 0) {
//         count += 1;
//         return e / 2;
//       } else {
//         count += 1;
//         return (e - 1) / 2;
//       }
//     });
//       return count;
//   }

//   return count;
// };

function solution(num_list) {
    let count_operations = 0;

    num_list.forEach(num => {
        while (num > 1) {
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = (num - 1) / 2;
            }
            count_operations++;
        }
    });

    return count_operations;
}
