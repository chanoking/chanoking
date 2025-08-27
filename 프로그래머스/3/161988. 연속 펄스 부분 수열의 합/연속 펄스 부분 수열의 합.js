// const solution = (sequence) => {
//     let check = sequence[0];
//     const result = [];
//     let j = 0;
//     for(let i = 1; i < sequence.length; i++){
//         if((check >= 0 && sequence[i] < 0) || (check < 0 && sequence[i] >= 0)){
//             check = sequence[i];
//             if(i === sequence.length - 1) result.push(sequence.slice(j, i+1))
//         }else{
//             result.push(sequence.slice(j, i));
//             j = i;
//             if(j === sequence.length - 1) result.push([sequence[j]]);
//         }
        
//     }
    
//     const map = result.map(v => v.map(e => e >= 0 ? 1 : -1));
//     const ans = result.map((v, vi) => v.map((e, ei) => e * map[vi][ei]));
//     return Math.max(...ans.map(v => v.reduce((acc, cur) => acc + cur, 0)));
// }

// function solution(sequence) {
//     let answer = -Infinity;

//     const N = sequence.length;

//     // pulsed[i][0/1]: +로 시작했을 때 배열 / -로 시작했을 때 배열
//     const pulsed = Array.from({ length: N }, () => {
//         return Array.from({ length: 2 }, () => [0, 0]);
//     });
//     // acc[i][0/1]: 0번째부터 i번째 까지 중, i번째 원소를 포함하는 연속 부분 수열의 최대값
//     const acc = Array.from({ length: N }, () => {
//         return Array.from({ length: 2 }, () => [0, 0]);
//     });

//     for (let i=0; i<N; i++) {
//         console.log(pulsed)
//         if (i === 0) {
//             pulsed[0][0] = sequence[0];
//             pulsed[0][1] = -sequence[0];

//             acc[i][0] = pulsed[i][0];
//             acc[i][1] = pulsed[i][1];

//             answer = Math.max(answer, acc[i][0], acc[i][1]);

//             continue;
//         }

//         const sign = i % 2 === 0 ? 1 : -1;

//         pulsed[i][0] = sign * sequence[i];
//         pulsed[i][1] = (-1) * sign * sequence[i];

//         acc[i][0] = Math.max(acc[i-1][0] + pulsed[i][0], pulsed[i][0]);
//         acc[i][1] = Math.max(acc[i-1][1] + pulsed[i][1], pulsed[i][1]);

//         answer = Math.max(answer, acc[i][0], acc[i][1]);
//     }

//     return answer;
// }

// function solution(sequence) {
//     let n = sequence.length;
//     let minLen = n + 1; // 가장 짧은 부분 수열의 길이를 저장할 변수
//     let result = [0, n - 1]; // 결과의 시작과 끝 인덱스를 저장할 변수 (초기값: 전체 수열)

//     // 1. +1, -1, +1 ... 펄스 수열
//     let pulse1 = sequence.map((val, i) => (i % 2 === 0 ? 1 : -1)); // +1로 시작하는 펄스
//     let currentSum1 = 0;
//     let left1 = 0;

//     // 2. -1, +1, -1 ... 펄스 수열
//     let pulse2 = sequence.map((val, i) => (i % 2 === 0 ? -1 : 1)); // -1로 시작하는 펄스
//     let currentSum2 = 0;
//     let left2 = 0;

//     for (let right = 0; right < n; right++) {
//         // 펄스 1 ( +1, -1, +1, ...)
//         currentSum1 += sequence[right] * pulse1[right];
//         // 펄스 2 ( -1, +1, -1, ...)
//         currentSum2 += sequence[right] * pulse2[right];

//         // 두 펄스 수열 모두에서 합이 0보다 작아지면 윈도우를 좁힙니다.
//         while (currentSum1 < 0 || currentSum2 < 0) {
//             if (currentSum1 < 0) {
//                 currentSum1 -= sequence[left1] * pulse1[left1];
//                 left1++;
//             }
//             if (currentSum2 < 0) {
//                 currentSum2 -= sequence[left2] * pulse2[left2];
//                 left2++;
//             }
//         }

//         // 현재 윈도우의 길이를 계산
//         let len1 = right - left1 + 1;
//         let len2 = right - left2 + 1;

//         // 가장 짧은 길이를 갱신하고 결과 인덱스 업데이트
//         if (len1 < minLen) {
//             minLen = len1;
//             result = [left1, right];
//         }
//         if (len2 < minLen) {
//             minLen = len2;
//             result = [left2, right];
//         }
//     }

//     return result; // 가장 짧은 부분 수열의 시작과 끝 인덱스를 반환
// }

const solution = (arr) => {
  let best = -Infinity;

  // 패턴 A: + - + - ...
  let curA = 0;
  // 패턴 B: - + - + ...
  let curB = 0;

  for (let i = 0; i < arr.length; i++) {
    const signA = (i % 2 === 0) ? 1 : -1;
    const signB = -signA;        // 반대 시작

    const vA = arr[i] * signA;
    const vB = arr[i] * signB;

    // Kadane: "여기서 끝나는" 최대합 갱신
    curA = Math.max(vA, curA + vA);
    curB = Math.max(vB, curB + vB);

    // 전체 최댓값 갱신
    best = Math.max(best, curA, curB);
  }
  return best;
};