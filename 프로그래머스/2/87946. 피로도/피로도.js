const getPermutation = (arr) => {
    if(arr.length < 1) return [[]];
    let result = [];
    
    for(let i = 0; i < arr.length; i++){
        const rest = arr.slice(0,i).concat(arr.slice(i+1));
        const perms = getPermutation(rest);
        for(let perm of perms){
            result.push([arr[i]].concat(perm))
        }
    }
    return result;
}

const solution = (k, dungeons) => {
    let maxCount = 0;
    const permutation = getPermutation(dungeons);
    for(let perm of permutation){
        let currentK = k;
        let count = 0;
        for(let dungeon of perm){
            const require = dungeon[0];
            const reduction = dungeon[1];
            
            if(require <= currentK) {
                currentK -= reduction;
                count++;
            }else {
                break;
            }
            
            maxCount = Math.max(maxCount, count)
        }
    }
    
    return maxCount;
}