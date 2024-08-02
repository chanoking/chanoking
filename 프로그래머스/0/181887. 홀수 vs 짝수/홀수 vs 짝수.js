// const solution = (num_list) => {
//     const evenSum = num_list.filter((_,i)=> i%2!==0).reduce((acc, curr) => acc + curr, 0);
//     const oddSum = num_list.filter((_,i) => i%2===0).reduce((acc, curr) => acc + curr, 0);
    
    
//     return evenSum === oddSum ? evenSum : evenSum > oddSum ? evenSum : oddSum;
// }

const solution = (num_list) => {
    let even = 0;
    let odd = 0;
    
    num_list.map((v, i) => !(i%2) ? even += v : odd += v)
    
    return even > odd ? even : odd;
}