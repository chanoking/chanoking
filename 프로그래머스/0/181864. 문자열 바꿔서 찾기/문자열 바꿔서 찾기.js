const solution = (myString, pat) => {
    let char = ''
    for(let i of myString){
        i == "A" ? char += "B" : char += "A" 
    }
    return char.match(pat) ? 1 : 0;
}