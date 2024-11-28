const solution = (orders, course) => {
    const ordered = {};
    const maxNum = Array(Math.max(...course) + 1).fill(0);
    const candidates = {};
    const createSet = (arr, start, len, foods) => {
        if(len === 0){
            ordered[foods] = (ordered[foods] || 0) + 1;
            if(ordered[foods] > 1) candidates[foods] = ordered[foods];
            maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
        }
        
        for(let i = start; i < arr.length; i++){
            createSet(arr, i + 1, len - 1, foods + arr[i]);
        }
    }
    
    orders.forEach(order => {
        const sortedOrder = order.split('').sort();
        course.forEach(len => {
            createSet(sortedOrder, 0, len, '');
        })
    })
    
    const launched = Object.keys(candidates).filter(foods => maxNum[foods.length] === candidates[foods]);
    
    return launched.sort();
}