const solution = (s) => {
    if(s.length % 2 !== 0 || s[0] === ')' || s[s.length - 1] === '(') return false;
    const stack = [];
    for(let c of s){
        if(c === '('){
            stack.push(c);
        }else{
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return !stack.length;
}