const solution = (want, number, discount) => {
    let result = 0;
    const map1 = {};
    let map2 = {}
    // const date = Array.from({length: discount.length}, (v,i) => i + 1);
    // date.forEach((v,i) => map2[v] = discount[i]);
    want.forEach((v, i) => map1[v] = number[i]);
    discount.forEach((v,i) => map2[v] = (map2[v] || 0) + 1)
                 
    for(let i = 0; i < discount.length; i++){
        let partial = discount.slice(i, i+10);
        if(partial.length !== 10) return result;
        map2 = {}
        for(let j = 0; j < partial.length; j++){
            map2[partial[j]] = (map2[partial[j]] || 0) + 1;
        }
        if(want.every(w => map1[w] === map2[w])) result++
        
    }
    return result;
}