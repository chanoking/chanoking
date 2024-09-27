// const solution = (storey) => {
//     let count = 0; // 마법의 돌 개수
//     while (storey > 0) {
//         let digit = storey % 10;  // 현재 자리의 숫자
//         let next_digit = Math.floor(storey / 10); // 다음 자리 숫자
        
//         if (digit > 5 || (digit == 5 && next_digit >= 5)) {
//             // 반올림하는 것이 더 유리한 경우
//             count += (10 - digit);  // 현재 자리에서 +를 해서 반올림
//             storey = Math.floor(storey / 10) + 1;  // 다음 자리로 넘어가고 반올림 추가
//         } else {
//             // 반올림하지 않고 그냥 빼는 것이 더 유리한 경우
//             count += digit;  // 현재 자리에서 -를 해서 0으로 만듦
//             storey = Math.floor(storey / 10);  // 다음 자리로 넘어감
//         }
//     }
//     return count;
// };

const solution = (storey) => {
    if(storey < 5) return storey;
    let r = storey % 10;
    let m = (storey - r) / 10;
    return Math.min(r + solution(m), 10 - r + solution(m+1));
}























