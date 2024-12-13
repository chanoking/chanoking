// const solution = (citations) => {
//     const h1 = citations.filter(v => v > 0).length;
//     let max = 0;
//     for(let i = h1; i > 1; i--){
//         const h2 = citations.filter(v => v >= i).length;
//         max = Math.max(max, h2)
//     }
//     return max;
// }

const solution = (citations) => {
    let h = 0;
    citations.sort((a, b) => b - a);
    for(let i = 0; i < citations.length; i++){
        if(citations[i] >= i + 1){
            h = i + 1;
        }else{
            break;
        }
    }
    return h;
}