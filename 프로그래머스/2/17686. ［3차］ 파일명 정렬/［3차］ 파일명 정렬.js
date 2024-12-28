const solution = (flies) => {
    const result = [];
    const parseFlexibleString = (str) => {
        const match = str.match(/(\D+)(\d+)(\D+)/);
        if(!match) throw new Error('Invalid format');

        const [_, head, number, tail] = match;
        return [head, number, tail];
    }
    for(let fly of flies){
        const e = parseFlexibleString(fly);
        result.push(e);
    }
    result.sort((a, b) => {
        if(a[0].toLowerCase() !== b[0].toLowerCase()){
            return a[0].localeCompare(b[0]);
        }
        if(+a[1] !== +b[1]){
            return +a[1] - +b[1];
        }
        
    })
    return result.map(v => v.join(''));
}