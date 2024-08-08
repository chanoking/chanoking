const solution = (myString) => {
    const arr = [];
    myString.split('x').forEach((e) => arr.push(e.length))
    return arr;

}