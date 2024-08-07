const solution = (myString, pat) => {
    const myStringArr = myString.split("");
    const patFistIdx = 0
    const patLastIdx  = pat.length - 1;
    let count = 0;
    for(let i = 0; i < myString.length; i++){
        myString.slice(i,i + patLastIdx + 1) === pat ? count++ : count
        
    }
    return count;
}