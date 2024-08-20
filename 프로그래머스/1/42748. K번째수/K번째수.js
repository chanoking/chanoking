// const solution = (array, commands) => {
//     const arr = [];
//     commands.forEach((e,i) => arr.push(array.slice(e[0] - 1,e[1]).sort((a,b) => a -b)[e[2] - 1]))
//     return arr;
// }

const solution = (array, commands) => {
    return commands.map(command => {
        const [iPosition, jPosition, kPosition] = command;
        const newArray = array.filter((_,i) => i >= iPosition-1 && i <= jPosition -1).sort((a,b) => a - b);
        
        return newArray[kPosition - 1]
    })
}