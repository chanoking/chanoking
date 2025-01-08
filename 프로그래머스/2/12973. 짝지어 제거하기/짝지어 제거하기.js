const solution = (character) => {
    const stack = [];
    for(let char of character){
        if(stack.length > 0 && stack[stack.length - 1] === char){
            stack.pop();
        }else{
            stack.push(char);
        }
    }
    return stack.join('').length === 0 ? 1 : 0;
}