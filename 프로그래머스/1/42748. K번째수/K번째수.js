const solution = (array, commands) => {
    const arr = [];
    commands.forEach((e,i) => arr.push(array.slice(e[0] - 1,e[1]).sort((a,b) => a -b)[e[2] - 1]))
    return arr;
}