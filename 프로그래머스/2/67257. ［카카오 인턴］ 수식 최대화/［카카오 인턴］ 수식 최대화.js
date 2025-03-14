const solution = (expression) => {
    const priority = [['-', '+', '*'],['-', "*", "+"], ['+', '-', '*'], ['+', '*', '-'], ['*', '-', '+'], ['*', '+', '-']];
    const answer = [];
    priority.forEach(prio => {
        const split = expression.match(/\d+|[*\-+]/g);
            let i = 0;
            prio.forEach(p => {
                while(split.includes(p)){
                    if(split[i] === p){
                        if(p === '*'){
                            split.splice(i-1, 3, +split[i - 1] * +split[i + 1]);
                            i = 0;
                        }else if(p === '+'){
                            split.splice(i-1, 3, +split[i - 1] + +split[i + 1]);
                            i = 0;
                        }else{
                            split.splice(i-1, 3, +split[i - 1] - +split[i + 1]);
                            i = 0;
                    }
                }
                i++;
            }
        })
        answer.push(...split);
    })
    
    const answer2 = answer.map(v => Math.abs(v));
    return Math.max(...answer2);
    
}