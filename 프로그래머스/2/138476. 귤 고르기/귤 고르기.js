// const solution = (k, tangerine) => {
//     const store = {};
    
//     // 각 귤 크기의 빈도를 계산
//     tangerine.forEach((t) => {
//         store[t] = (store[t] || 0) + 1;
//     });

//     // 빈도를 큰 순서대로 정렬
//     const sortedValues = Object.values(store).sort((a, b) => b - a);
    
//     let mk = 0;  // 현재 선택된 귤의 수
//     let count = 0;  // 선택된 귤 종류 수

//     for (let value of sortedValues) {
//         mk += value;
//         count++;
//         if (mk >= k) {
//             break;  // 필요한 만큼 선택했으면 중단
//         }
//     }

//     return count;
// }

const solution = (k, tangerine) => {
    const store = {};
    let count = 0;
    let matching = 0;
    tangerine.forEach((t) => {
        store[t] = (store[t] || 0) + 1;
    })
    
    const sortedValues = Object.values(store).sort((a,b) => b - a);
    
    for(let v of sortedValues){
        matching += v;
        count++;
        if(matching >= k) break;
    }
    
    return count;
}
























