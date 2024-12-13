// const solution = (brown, yellow) => {
//     let result = [];
//     const area = brown + yellow;
//     const sum = brown / 2 + 2 ;
//     for(let i = 1; i <= Math.floor(Math.sqrt(sum)) * Math.floor(Math.sqrt(sum)); i++){
//         for(let j = 1; j <= Math.floor(Math.sqrt(sum)) * 2; j++){
//             if(i * j === area && sum === i + j && i >= j){
//                 result = [i, j]
//             }
//         }
//     }
//     return result;
// }

const solution = (brown, yellow) => {
    let result;
    const area = brown + yellow;
    for(let height = 1; height <= Math.sqrt(area); height++){
        let width;
        if(area % height === 0){
            width = area / height;
        }
        
        if(brown === 2 * (width + height - 2)){
            result = [width, height];
        }
    }
    return result;
}