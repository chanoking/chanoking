const solution = (orders, course) => {
    const getCombinations = (str, size) => {
        const result = [];
        const combine = (start, comb) => {
            if (comb.length === size) {
                result.push(comb.join(''));
                return;
            }
            for (let i = start; i < str.length; i++) {
                combine(i + 1, [...comb, str[i]]);
            }
        };
        combine(0, []);
        return result;
    };

    const combinationCounts = new Map();

    // 1. 각 손님의 주문에서 조합 생성 및 카운팅
    orders.forEach(order => {
        const sortedOrder = order.split('').sort(); // 정렬된 상태로 조합 생성
        course.forEach(size => {
            const combinations = getCombinations(sortedOrder, size);
            combinations.forEach(comb => {
                combinationCounts.set(comb, (combinationCounts.get(comb) || 0) + 1);
            });
        });
    });

    // 2. 각 크기별로 최대 반복 횟수를 기준으로 조합 필터링
    const result = [];
    course.forEach(size => {
        let maxCount = 0;
        const candidates = [];

        // 해당 크기의 조합 중에서 조건에 부합하는 것을 탐색
        combinationCounts.forEach((count, comb) => {
            if (comb.length === size && count >= 2) {
                if (count > maxCount) {
                    maxCount = count;
                    candidates.length = 0; // 초기화
                    candidates.push(comb);
                } else if (count === maxCount) {
                    candidates.push(comb);
                }
            }
        });

        result.push(...candidates); // 크기별 가장 많이 등장한 조합 추가
    });

    return result.sort(); // 전체 결과를 사전순으로 정렬하여 반환
};

