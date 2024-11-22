const solution = (s) => {
    const isValid = (str) => {
        const stack = [];
        const pairs = {
            ")" : "(",
            "]" : "[",
            "}" : "{",
        }
        for(const char of str){
            if(char === "(" || char === "[" || char === "{") stack.push(char);
            else if(char in pairs){
                if(stack.length === 0 || stack.pop() !== pairs[char]) return false;
            }
        }
        return stack.length === 0;
    }
    
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(isValid(s)) count++;
        s = s.slice(1) + s.slice(0,1);
    }
    
    return count;
}