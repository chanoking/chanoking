const solution = (orders, course) => {
    const result = [];
    const getCombinations = (str, combLen) => {
        const result = [];
        const combine = (start, comb) => {
            if(combLen === comb.length){
                result.push(comb.join(''));
                return;
            }
            
            for(let i = start; i < str.length; i++){
                combine(i + 1, [...comb, str[i]]);
            }
        }
        combine(0, []);
        return result;
    }
    const combinationsCount = new Map();
    orders.forEach(order => {
        const sortedOrder = order.split('').sort();
        course.forEach(size => {
            const combinations = getCombinations(sortedOrder, size);
            combinations.forEach(comb => {
                combinationsCount.set(comb, (combinationsCount.get(comb) || 0) + 1);
            })
        })
    })
    
    course.forEach(size => {
        let maxCount = 0;
        let candidates = [];
        combinationsCount.forEach((count, comb) => {
            if(comb.length === size && count >= 2){
                if(maxCount < count){
                    maxCount = count;
                    candidates.length = 0;
                    candidates.push(comb);
                }else if(maxCount === count){
                    candidates.push(comb)
                }
            }
        })
        result.push(...candidates);
    })
    return result.sort();
}