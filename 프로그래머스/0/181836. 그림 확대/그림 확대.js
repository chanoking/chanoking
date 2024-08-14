const solution = (picture, k) => {
    const ans = [];
    const num = picture[0].length;
    const ans2 = []
    picture.forEach(e => e.split('').flatMap(v => ans.push(Array(k).fill(v).join(''))))
    const char = ans.join('');
    // while(char.length>=0){
    // ans2.push(char.substring(0, num*k)); 
        for(let i = 0; i < char.length; i += num*k){
            ans2.push(char.substring(i, num*k))    
        }
    // }
    return ans2.filter(e => e !== "").flatMap(e => Array(k).fill(e));
}