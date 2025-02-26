const solution = (k, ranges) => {
    
    const Collatz = (n) => {
        const arr = [];
        let copied = n;
        while(n > 1){
            if(n % 2 === 0){
                n /= 2;
                arr.push(n);
            }else{
                n = n * 3 + 1;
                arr.push(n);
            }
        }
        return [copied, ...arr];
    }
    
    const dotted = Collatz(k);
    const square = Array(dotted.length - 1).fill(0);
    dotted.forEach((dot, dotI) => {
        if(dotted.length - 1 === dotI) {
            return;
        }
        let sum = dot / 2 + dotted[dotI + 1] / 2;
        square[dotI] = sum;
    })
    return ranges.map(([x, y]) => {
        const start = x;
        const end = square.length + y;
        if(start > end){
            return -1;
        }else{
            const sum = square.slice(start, end).reduce((acc, cur) => acc + cur, 0);        
            return sum;
        }
    })
    
    
    
}