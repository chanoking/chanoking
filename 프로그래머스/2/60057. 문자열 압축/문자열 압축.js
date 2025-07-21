const solution = (s) => {
    let minLen = s.length;
    for(let len = 1; len <= Math.min(s.length / 2); len++){
        let compressed = "";
        let prev = s.slice(0, len);
        let count = 1;
        for(let i = len; i < s.length; i += len){
            let curr = s.slice(i, i + len);
            if(curr === prev) count++;
            else {
                compressed += count === 1 ? prev : count+prev;
                count = 1;
                prev = curr;
            }
        }
        compressed += count === 1 ? prev : count+prev;
        minLen = Math.min(minLen, compressed.length);
    }
    return minLen;
}