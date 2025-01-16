const solution = (n) => {
    let count = n.toString(2).split('').filter(v => v === '1').length;  
    const cal = (n) => {
        return n.toString(2).split('').filter(v => v === '1').length;    
    }
    while(true){
        n++;
        if(count === cal(n)) return n;
    }
}