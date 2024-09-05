// const solution = (d, budget) => {
//     let result = 0;
//     let sortedArr = d.sort((a,b) => a - b);
//     while(budget>-Infinity){
//         sortedArr.forEach((v,i) => {
//            if(budget >= v){
//                 result++;   
//            }
//            budget -= v;
//        } 
//     )}
    
//     return result;
// }

// const solution = (d, budget) => {
//     const sortedD = d.sort((a,b) => a-b);
//     let result = 0;
    
//     for(let i = 0; i < sortedD.length; i++){
//         if(sortedD[i] <= budget){
//             result++;
//             budget -= sortedD[i];
//         }else{
//             break;
//         }
//     }
    
//     return result;
// }

// const solution = (d, budget) => {
//     const sortedD = d.sort((a,b) => a - b);
//     let result = 0;
    
//     for(let i = 0; i < sortedD.length; i++){
//         if(budget >= sortedD[i]){
//             result++;
//             budget -= sortedD[i];
//         }
//     }
    
//     return result;
// }

// const solution = (d, budget) => {
//     return d.sort((a,b) => a-b).reduce((count,curr) => {
//         count += (budget >= curr)
//         budget -= curr;
//         return count;
//         },0)
// }





// const solution = (d, budget) => {
//     return d.sort((a,b) => a - b).reduce((count, price) => {
//         count += ((budget - price) >= 0)
//         budget -= price;
//         return count;
//     },0)
// }

const solution = (d, budget) => {
    return d.sort((a,b) => a - b).reduce((count,price) => {
        return count += ((budget -= price)>=0);
    },0)
}
























