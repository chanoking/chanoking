const solution = (num_list) => {
    const evenSum = num_list.filter((_,i)=> i%2!==0).reduce((acc, curr) => acc + curr, 0);
    const oddSum = num_list.filter((_,i) => i%2===0).reduce((acc, curr) => acc + curr, 0);
    
    
    return evenSum === oddSum ? evenSum : evenSum > oddSum ? evenSum : oddSum;
}