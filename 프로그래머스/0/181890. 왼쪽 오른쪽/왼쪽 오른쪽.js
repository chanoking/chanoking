// const solution = (str_list) => {
//     str_list.splice(0, star_list[star_list.indexOf("l")])
// }

// const solution = (str_list) => {
//     const arr = [];
//     if(str_list.indexOf("l")>str_list.indexOf("r")){
//         if(str_list.indexOf("r")+1 === str_list.length){
//             return [];
//         } else{
//         arr.push(...str_list.slice(str_list.indexOf("r")+1))
//         }
//     } else{
//         if(str_list.indexOf("l") === 0){
//             return [];
//         }else{
//         arr.push(...str_list.slice(0,str_list.indexOf("l")))
//         }
//     }
//     return arr;
// }

// const solution = (str_list) => {
//     if(str)
// }

// const solution = (str_list) => {
//     if(!(str_list.includes("r")) || !(str_list.includes("l"))){
//        return [];
//        }else if(str_list.indexOf("l")<str_list.indexOf("r")){
//            return [...str_list.splice(0,str_list.indexOf("l"))]
//        } else{
//            return [...str_list.splice(str_list.indexOf("r")+1,str_list.length-str_list.indexOf("r")-1)]
//        }
// }

// const solution = (str_list) => {
//     // "l"과 "r"의 인덱스를 구함
//     const indexOfL = str_list.indexOf("l");
//     const indexOfR = str_list.indexOf("r");
    
//     // "r" 또는 "l" 중 하나라도 없으면 빈 배열 반환
//     if (!(str_list.includes("r")) || !(str_list.includes("l")) || indexOfL === 0 || indexOfR+1 === str_list.length) {
//         return [];
//     }
//     // "l"이 "r"보다 먼저 나타나는 경우
//     if (indexOfL < indexOfR) {
//         return str_list.slice(0, indexOfL); 
//     } else {
//         // "r"이 "l"보다 먼저 나타나는 경우else{
//         return str_list.slice(indexOfR + 1);
//         }
// //     }

// const solution = (str_list) => {
//     if(!(str_list.includes("l")) && !(str_list.includes("r"))){
//         return [];
//     } else{
//         if(str_list.indexOf("r") !== -1 || str_list.indexOf("l")<str_list.indexOf("r")){
//             return str_list.splice(0,str_list.indexOf("l"))
//         }else{
//             return str_list.splice(str_list.indexOf("r")+1)
//         }
//     }
// }

// const solution = (str_list) => {
//     const arr = ["a","b","c","d"]
//    return arr.slice() 
// }

// const solution = (str_list) => {
//     if(str_list.indexOf("l") === -1 && str_list.indexOf("r") === -1){
//         return [];
//     } else{
//         if(str_list.indexOf("r") === -1 && str_list.indexOf("l")===0){
//             return [];
//         }
//         else if(str_list.indexOf("l")<str_list.indexOf("r")){
//             return str_list.slice(0,str_list.indexOf("l"))
//         }else{
//             if(str_list.indexOf("l")=== -1 && str_list.indexOf("r") === 0){
//                 return [];
//             }
//             else{
//               str_list.slice(str_list.indexOf("r")+1)  
//             } 
//         }
//     }
// 

// const solution = (str_list) => {
//     const L = str_list.indexOf("l")
//     const R = str_list.indexOf("r")
//     if(L>=0 && R >= 0){
//         if(L<R){
//             return str_list.slice(0, L)
//         } else{
//             return str_list.slice(R+1)
//         }
//     }else{
//         return [];
//     }
// }

const solution = (str_list) => {
    const L = str_list.indexOf("l");
    const R = str_list.indexOf("r");

    if (L === -1 && R === -1) {
        // "l"과 "r"이 모두 없는 경우
        return [];
    } else if (L !== -1 && (R === -1 || L < R)) {
        // "l"이 먼저 나오거나 "r"이 없는 경우
        return str_list.slice(0, L);
    } else if (R !== -1 && (L === -1 || R < L)) {
        // "r"이 먼저 나오거나 "l"이 없는 경우
        return str_list.slice(R + 1);
    }
}
