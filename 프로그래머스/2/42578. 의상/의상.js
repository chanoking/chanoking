// const solution = (clothes) => {
//     const obj = {};
//     let comb = 1;
//     for(let [name, type] of clothes){
//         obj[type] = (obj[type] || []);
//         obj[type].push(name);
//     }
//     for(let o in obj){
//         comb *= obj[o].length;
//     }
//     if(Object.keys(obj).length === 1){
//         return comb;
//     }

//     return comb + clothes.length;
// }

const solution = (clothes) => {
    const obj = {};
    let comb = 1;

    // 1. 의상 종류별로 분류
    for (let [name, type] of clothes) {
        obj[type] = (obj[type] || 0) + 1;
    }

    // 2. 조합 계산 (각 의상 종류별 경우의 수 + 1) 곱하기
    for (let type in obj) {
        comb *= (obj[type] + 1); // 해당 종류의 의상을 입지 않는 경우 포함
    }

    // 3. 아무것도 입지 않는 경우 제외
    return comb - 1;
};
