// const solution = (s) => {
//     let arr = [];
//     let min;
//     const cal = () => {
//         for(let k = 1; k <= Math.floor(s.length / 2); k++){
//             let charr = '';
//             let count = 1;
//             let char = '';
//             let stack = [s.slice(0, k)];
            
//             for(let i = k; i < s.length; i += k){
//                 let check = stack.pop();
//                 let comp = s.slice(i,k+i);
//                 if(check === comp) {
//                     stack.push(comp);
//                     count++;
//                 if(i === s.length - k) charr += `${count}${check}`;
//             }else{
//                 char += (count === 1 ? check : `${count}${check}`);
//                 charr += char;
//                 if(i+k >= s.length) charr += comp;
//                 char = '';
//                 stack.push(comp);
//                 count = 1;
//             }
//         }
//             arr.push(charr.length);
//             min = Math.min(...arr);
//     }
// }
//     cal();
    
//     return Math.min(...arr);
// }

const solution = (s) => {
    let minLen = s.length;

    for (let len = 1; len <= Math.floor(s.length / 2); len++) {
        let compressed = "";
        let prev = s.slice(0, len);
        let count = 1;

        for (let i = len; i < s.length; i += len) {
            const curr = s.slice(i, i + len);

            if (curr === prev) {
                count++;
            } else {
                compressed += (count > 1 ? count : "") + prev;
                prev = curr;
                count = 1;
            }
        }

        // 마지막 남은 문자열 처리
        compressed += (count > 1 ? count : "") + prev;

        // 최솟값 갱신
        minLen = Math.min(minLen, compressed.length);
    }

    return minLen;
};
