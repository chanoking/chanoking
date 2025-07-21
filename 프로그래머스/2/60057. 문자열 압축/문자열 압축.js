const solution = (s) => {
    const arr = [];
    let min = s.length;
    for(let i = 1; i <= Math.floor(s.length / 2); i++){
        let compressed = "";
        let prev = s.slice(0, i);
        let count = 1;
        for(let k = i; k < s.length; k += i){
            let curr = s.slice(k, k + i);
            if(prev === curr){
              count++;  
            }else {
                compressed += count === 1 ? prev : `${count}${prev}`;
                prev = curr;
                count = 1;
            }
        }
        compressed += count === 1 ? prev : `${count}${prev}`;
        min = Math.min(min, compressed.length);
    }
    return min;
}