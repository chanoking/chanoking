// const solution = (numbers) => {
//     let max = 0;
//     const find = (path, used) => {
//         if (path.length > 0) {
//             max = Math.max(max, Number(path.join('')));
//         }
//         for (let i = 0; i < numbers.length; i++) {
//             if (!used[i]) {
//                 used[i] = true;
//                 find([...path, numbers[i]], used);
//                 used[i] = false;
//             }
//         }
//     };
//     find([], Array(numbers.length).fill(false));
//     return String(max);
// };

// const solution = (numbers) => {
//     const sorted = numbers
//         .map(String) // 숫자를 문자열로 변환
//         .sort((a, b) => (b + a) - (a + b)); // 두 숫자를 이어붙여 비교

//     // 결과를 연결. 앞자리가 0인 경우 "0" 반환
//     const result = sorted.join('');
//     return result[0] === '0' ? '0' : result;
// };
















const solution = (numbers) => {
    const result = numbers.map(v => String(v)).sort((a, b) => (b + a) - (a + b));
    return result[0] === '0' ? '0' : result.join('');
}

// const solution = (numbers) => {
//     const sorted = numbers
//         .map(String) // 숫자를 문자열로 변환
//         .sort((a, b) => (b + a) - (a + b)); // 두 숫자를 이어붙여 비교

//     // 결과를 연결. 앞자리가 0인 경우 "0" 반환
//     const result = sorted.join('');
//     return result[0] === '0' ? '0' : result;
// };