const solution = (sequence) => {
    let curA = 0;
    let curB = 0;
    let best = 0;
    
    for(let i = 0; i < sequence.length; i++){
        let signA = i % 2 === 0 ? 1 : -1;
        let signB = -signA;
        
        let vA = sequence[i] * signA;
        let vB = sequence[i] * signB;
        
        curA = Math.max(vA, vA+curA);
        curB = Math.max(vB, vB+curB);
        
        best = Math.max(curA, curB, best)
    }
    
    return best;
}