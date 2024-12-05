const compression = (arr) => {
    const flatted = arr.flat();
    const allEqual = flatted.every(v => v === flatted[0]);
    return allEqual ? [flatted[0]] : arr;
}

const divide = (arr) => {
    if(arr.length === 1) return arr;
    const result = [];
    const size = arr.length;
    const halfSize = size / 2;
    for(let i = 0; i < size; i += halfSize){
        for(let j = 0; j < size; j += halfSize){
            const subMatrix = [];
            for(let x = i; x < i + halfSize; x++){
                subMatrix.push(arr[x].slice(j, j + halfSize))
            }
            result.push(...divide(compression(subMatrix)));
        }
    }
    return result;
}

const count = (arr) => {
    const zero = arr.filter(v => v === 0).length;
    const one = arr.filter(v => v === 1).length;
    return [zero, one];
}

const solution = (arr) => {
    if(compression(arr).length === 1) return count(compression(arr));
    const divided = divide(arr);
    const counted = count(divided);
    
    return counted;
}