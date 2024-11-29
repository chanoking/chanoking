// const solution = (numbers) => {
//     const getBitDifference = (a, b) => {
//         const difference = (a ^ b).toString(2).split('1').length - 1;
//         return difference;
//     }
//     return numbers.map(n => {
//         let target = n + 1;
//         while(getBitDifference(n, target) > 2){
//             target++
//         }
//         return target;
//     })
    
// }

// const solution = (numbers) => {
//     return numbers.map(n => {
//         if (n % 2 === 0) {
//             // 짝수인 경우: 다음 수가 비트 차이 1
//             return n + 1;
//         } else {
//             // 홀수인 경우: 맨 오른쪽 0을 1로 바꿈
//             let binary = n.toString(2);
//             let idx = binary.lastIndexOf('0');
//             if (idx === -1) {
//                 // 모두 1인 경우
//                 return (1 << binary.length) + (n >> 1);
//             } else {
//                 // 맨 오른쪽 0을 1로 바꾸고, 그 이후 1을 0으로 바꿈
//                 return n + (1 << (binary.length - idx - 1)) - (1 << (binary.length - idx - 2));
//             }
//         }
//     });
// };

function solution(numbers) {
    return numbers.map((n, i) => {
        const binary = n.toString(2).split('');
        const lastZeroIndex = binary.lastIndexOf('0');

        if (lastZeroIndex === -1) {
            // 111 => 1011
            binary.splice(1, 0, '0');
        } else {
            const lastIndex = binary.length - 1;
            if (lastIndex === lastZeroIndex) {
                // 100 => 101
                binary[lastZeroIndex] = '1';
            } else {
                // 101 => 110
                [
                    binary[lastZeroIndex],
                    binary[lastZeroIndex + 1]
                ] = [
                    binary[lastZeroIndex + 1],
                    binary[lastZeroIndex]
                ]
            }
        }

        return parseInt(binary.join(''), 2);
    });
}