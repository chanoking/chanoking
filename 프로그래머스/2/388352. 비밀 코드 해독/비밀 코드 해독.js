const solution = (n, q, ans) => {
    const combined = makeCombination(n, 5);
    
    let count = 0;
    
    const box = [];
    
    for(let i = 0; i < combined.length; i++){
        const temp = [];
        for(let k = 0; k < q.length; k++){
            const set = new Set([...q[k], ... combined[i]]);
            temp.push(10 - set.size);
        }
        box.push(temp);
    }
    for(let i = 0; i < box.length; i++){
        if(ans.every((v,idx) => v === box[i][idx])) count++;
    }
    return count;
}

const makeCombination = (n, k) => {
    const result = [];
    
    const backtrack = (start, combo) => {
        if(combo.length === k) {
            result.push([...combo]);
            return;
        }
        for(let i = start; i <= n; i++){
            combo.push(i);
            backtrack(i+1, combo);
            combo.pop();
        }
    }
    backtrack(1, []);
    return result;
} 

const makeCount = (arrA, arrB) => {
    
}