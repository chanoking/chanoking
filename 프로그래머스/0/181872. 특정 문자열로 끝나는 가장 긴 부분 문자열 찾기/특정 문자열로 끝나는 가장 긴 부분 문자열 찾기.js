const solution = (myString, pat) => {
    const lastChar = pat.slice(-1);
    const lastCharIdx = myString.lastIndexOf(lastChar);
    return myString.slice(0,lastCharIdx+1);
}