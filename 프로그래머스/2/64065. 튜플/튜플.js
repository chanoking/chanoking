const solution = (s) => {
    const result = [];
    const replaced = s.replace(/[{}]/g, (match) => match === '{' ? '[' : ']');
    const parsed = JSON.parse(replaced);
    const sorted = parsed.sort((a,b) => a.length - b.length);
    for(let i = 0; i < sorted.length; i++){
        for(let j = 0; j < sorted[i].length; j++){
            if(!result.includes(sorted[i][j])) result.push(sorted[i][j]);
        }
    }
    return result;
}