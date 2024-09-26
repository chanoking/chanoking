// const solution = (weights) => {
//     const fromCenter = [1, 2, 3, 4];
//     let count = 0;
//     for(let i = 0; i < weights.length; i++){
//         for(let j = i + 1; j < weights.length; j++){
//             for(let k = 0; k < fromCenter.length; k++){
//                 let calculated = weights[j] * fromCenter[k]
//                 if(calculated === weights[i]) count++;
//             }
//         }
//     }
    
//     return count;
// }

// const solution = (weights) => {
//     const fromCenter = [1, 2, 3, 4];
//     let count = 0;
//     for(let i = 0; i < weights.length; i++){
//         for(let j = i+1; j <= weights.length; j++){
//             fromCenter.forEach((meter) => {
//                 if (weights[i] === (weights[j] * meter)) count++
//             })
//         }
//     }
//     return count; 
// }

// const solution = (weights) => {
//     const fromCenter = [1, 2, 3, 4];
//     let count = 0;
//     // Adjust the loop boundary to ensure all pairs are checked
//     for (let i = 0; i < weights.length; i++) {
//         for (let j = i + 1; j < weights.length; j++) {  // Corrected boundary
//             fromCenter.forEach((meter) => {
//                 if ((weights[i] === (weights[j] * meter)) || ((weights[i] * meter) === weights[j]) || (weights[i] * meter) === (weights[j] * meter)) count++;
//             });
//         }
//     }
//     return count; 
// };

// const solution = (weights) => {
//     const arr = [];
//     const arr2 = [];
    
//     const meter = [1, 2, 3, 4];
//     let count = 0;
//     let box = []
//     for(let i = 0; i < weights.length; i++){
//         box = []
//         for(let j = i + 1; j < weights.length; j++){
//             for(let k = 0; k < meter.length; k++){
//                 box.push(weights[j] * )    
//             }
//         }
//     }
    
// }

// const solution = (weights) => {
//     const distances = [2, 3, 4]; // 시소의 좌석 간 거리
//     let count = 0; // 짝꿍의 수를 셀 변수
    
//     // 몸무게를 오름차순 정렬하여 중복 계산을 피합니다.
//     weights.sort((a, b) => a - b);

//     // 모든 쌍에 대해 가능한 거리 조합을 확인합니다.
//     for (let i = 0; i < weights.length; i++) {
//         for (let j = i + 1; j < weights.length; j++) {
//             // 거리 조합으로 몸무게의 균형을 체크
//             for (let d1 of distances) {
//                 for (let d2 of distances) {
//                     if (weights[i] * d1 === weights[j] * d2) {
//                         count++;
//                     }
//                 }
//             }
//         }
//     }
    
//     return count;
// };

// 예제 테스트
// console.log(solution([100, 180, 360, 100, 270])); // 결과: 4

// const solution = (weights) => {
//     let count = 0;
//     const weightMap = new Map();

//     // 가능한 거리 조합 생성
//     const distances = [2, 3, 4];
//     const ratios = [1, 2 / 3, 3 / 4, 2 / 4]; // 거리 비율을 미리 계산합니다.

//     // 각 몸무게를 순회하며 맵을 업데이트하고 짝꿍을 확인합니다.
//     for (let weight of weights) {
//         // 각 비율에 따라 해당 무게의 짝꿍이 맵에 있는지 체크
//         for (let ratio of ratios) {
//             const targetWeight = weight * ratio;
//             if (weightMap.has(targetWeight)) {
//                 count += weightMap.get(targetWeight);
//             }
//         }

//         // 현재 몸무게를 맵에 추가 또는 업데이트
//         weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
//     }

//     return count;
// };

// // 예제 테스트
// console.log(solution([100, 180, 360, 100, 270])); // 결과: 4











// const solution = (weights) => {
//     let count = 0;
//     const weightMap = new Map();

//     // 가능한 거리 비율 생성 (비율이 양쪽에 들어갈 수 있도록 추가)
//     const ratios = [1, 2 / 3, 3 / 4, 2 / 4, 3 / 2, 4 / 3, 4 / 2]; 

//     // 각 몸무게를 순회하며 맵을 업데이트하고 짝꿍을 확인합니다.
//     for (let weight of weights) {
//         // 각 비율에 따라 해당 무게의 짝꿍이 맵에 있는지 체크
//         for (let ratio of ratios) {
//             const targetWeight1 = weight * ratio; // 한쪽에 비율을 곱한 경우
//             const targetWeight2 = weight / ratio; // 반대쪽에 비율을 곱한 경우
//             // 두 경우 모두 체크
//             if (weightMap.has(targetWeight1)) {
//                 count += weightMap.get(targetWeight1);
//             }
//             if (weightMap.has(targetWeight2)) {
//                 count += weightMap.get(targetWeight2);
//             }
//         }

//         // 현재 몸무게를 맵에 추가 또는 업데이트
//         weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
//     }

//     return count;
// };








// const solution = (weights) => {
//     let count = 0;
//     const weightMap = new Map();

//     // 가능한 거리 비율 생성
//     const ratios = [2 / 3, 3 / 4, 2 / 4, 3 / 2, 4 / 3, 4 / 2]; 

//     // 각 몸무게를 순회하며 맵을 업데이트하고 짝꿍을 확인합니다.
//     for (let weight of weights) {
//         // 같은 무게인 경우는 비율 없이 그대로 카운팅
//         if (weightMap.has(weight)) {
//             count += weightMap.get(weight);
//         }

//         // 각 비율에 따라 해당 무게의 짝꿍이 맵에 있는지 체크
//         for (let ratio of ratios) {
//             const targetWeight1 = weight * ratio; // 한쪽에 비율을 곱한 경우
//             const targetWeight2 = weight / ratio; // 반대쪽에 비율을 곱한 경우
//             // 두 경우 모두 체크
//             if (weightMap.has(targetWeight1)) {
//                 count += weightMap.get(targetWeight1);
//             }
//             if (weightMap.has(targetWeight2)) {
//                 count += weightMap.get(targetWeight2);
//             }
//         }

//         // 현재 몸무게를 맵에 추가 또는 업데이트
//         weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
//     }

//     return count;
// };











// const solution = (weights) => {
//     let count = 0;
//     const weightMap = new Map();

//     // 가능한 거리 비율 생성
//     const ratios = [2 / 3, 3 / 4, 2 / 4, 3 / 2, 4 / 3, 4 / 2];

//     // 각 몸무게를 순회하며 맵을 업데이트하고 짝꿍을 확인합니다.
//     for (let weight of weights) {
//         // 같은 무게를 가진 짝꿍이 있는지 확인
//         if (weightMap.has(weight)) {
//             count += weightMap.get(weight);
//         }

//         // 각 비율에 따라 해당 무게의 짝꿍이 맵에 있는지 체크
//         for (let ratio of ratios) {
//             const targetWeight1 = weight * ratio; // 비율을 곱한 경우
//             const targetWeight2 = weight / ratio; // 비율로 나눈 경우

//             // 두 경우 모두 체크하여 짝꿍이 있는지 확인
//             if (weightMap.has(targetWeight1)) {
//                 count += weightMap.get(targetWeight1);
//             }
//             if (weightMap.has(targetWeight2)) {
//                 count += weightMap.get(targetWeight2);
//             }
//         }

//         // 현재 몸무게를 맵에 추가 또는 업데이트
//         weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
//     }

//     return count;
// };

// const solution = (weights) => {
//     let count = 0;
//     const weightMap = new Map();

//     // 같은 몸무게는 자동으로 짝꿍으로 간주
//     for (let weight of weights) {
//         if (weightMap.has(weight)) {
//             count += weightMap.get(weight);
//         }

//         // 현재 몸무게를 맵에 추가 또는 업데이트
//         weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
//     }

//     // 가능한 거리 비율
//     const ratios = [2, 3, 4];
    
//     // 각 몸무게를 순회하며 짝꿍을 확인합니다.
//     for (let weight of weights) {
//         for (let ratio of ratios) {
//             const targetWeight = weight * ratio;  // 비율을 곱한 경우
//             if (weightMap.has(targetWeight)) {
//                 count += weightMap.get(targetWeight);
//             }
//         }
//     }

//     return count;
// };

// 테스트
// console.log(solution([100, 180, 360, 100, 270])); // 출력: 4


function solution(weights) {
    let answer = 0;
    const store = {}; //key-value
    const cal = [1, 3/2, 2, 4/3]; //경우의 수 (1,1), (2,3), (2,4), (3,4)

    weights.sort((a,b)=> b - a).forEach((w) => { //내림차순 정렬 후, 전체 돌면서
        let s;
        cal.forEach((i)=>{
            if( s = w * i, store[s] ){ //해당 비율을 곱한 값이 store에 존재할 경우
              answer += store[s];
            }
        });
        if (!store[w]) store[w] = 1;
        else store[w]++;
    });
    return answer;
}