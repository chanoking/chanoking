// const solution = (s) => {
//     s = s.toLowerCase();
//     const map = {}
//     let pCount = 0;
//     let yCount = 0;
//     for(let e of s){
//         if(e === 'p'){
//             pCount++;
//         }else if(e === 'y'){
//             yCount++;
//         }
//     }
//     return pCount === yCount ? true : false;
// }

const solution = (s) => {

    return s.toUpperCase().split('Y').length === s.toUpperCase().split('P').length ? true : false;
}