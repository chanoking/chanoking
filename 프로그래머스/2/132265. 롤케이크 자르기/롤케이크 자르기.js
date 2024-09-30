// const solution = (topping) => {
//     let count = 0;
//     for(let i = 1; i < topping.length; i++){
//         // const mid = Math.floor(i / 2);
//         let A = topping.slice(0,i)
//         let B = topping.slice(i);
//         let uniqueA = new Set(A);
//         let uniqueB = new Set(B);
//         // return uniqueB.size;
//         if(uniqueA.size === uniqueB.size){
//             count++;
//         }
//     }
    
//     return count;
// }


const solution = (topping) => {
    let count = 0;

    // 왼쪽 절반의 고유값을 저장할 Set
    const leftSet = new Set();
    const rightSet = new Set(topping); // 초기에는 전체가 오른쪽 부분이므로 전체를 넣어둠

    // 각 원소가 오른쪽에 얼마나 남아 있는지 카운트
    const rightCount = new Map();
    for (let item of topping) {
        rightCount.set(item, (rightCount.get(item) || 0) + 1);
    }

    // 1번째 원소부터 순차적으로 나누기 시작
    for (let i = 0; i < topping.length - 1; i++) {
        let current = topping[i];

        // 왼쪽 Set에 원소 추가
        leftSet.add(current);

        // 오른쪽에서 해당 원소의 개수 줄이기
        rightCount.set(current, rightCount.get(current) - 1);

        // 만약 오른쪽에 더 이상 해당 원소가 없으면, Set에서 제거
        if (rightCount.get(current) === 0) {
            rightSet.delete(current);
        }

        // 두 절반의 고유값 크기를 비교
        if (leftSet.size === rightSet.size) {
            count++;
        }
    }

    return count;
};
