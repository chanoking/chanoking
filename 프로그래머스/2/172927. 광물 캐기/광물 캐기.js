const solution = (picks, minerals) => {
    const fatigue = [
        [1, 1, 1], 
        [5, 1, 1], 
        [25, 5, 1]
    ];
    let groups = [];
    const mapping = {
        diamond: 0,
        iron: 1,
        stone: 2
    };
    let result = 0;
    minerals = minerals.map(mineral => mapping[mineral]);
    for(let i = 0; i < minerals.length; i += 5){
        groups.push(minerals.slice(i, i+5));
    }
    let totalPicks = picks.reduce((sum, v) => sum + v, 0);
    groups = groups.slice(0,totalPicks);
    groups.sort((a,b) => {
        let countA = [0, 0, 0];
        let countB = [0, 0, 0];
        a.forEach(v => countA[v]++);
        b.forEach(v => countB[v]++);
        
        return countB[0] - countA[0] || countB[1] - countA[1] || countB[2] - countA[2];    
    })
    for(let group of groups){
        let picksIdx = picks.findIndex(p => p > 0);
        if(picksIdx === -1) break;
        
        for(let mineral of group){
            result += fatigue[picksIdx][mineral];
        }
        picks[picksIdx]--;
    }
    return result;
}