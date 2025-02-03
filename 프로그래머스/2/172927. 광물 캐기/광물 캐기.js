// const solution = (picks, minerals) => {
//     let result = 0;
//     const mapping = {
//         diamond:0,
//         iron:1,
//         stone:2
//     }
//     let i = 0;
//     let j = 0;
//     let k = 5;
//     minerals = minerals.map(mineral => mapping[mineral]);
//     while(j < minerals.length && i < picks.length){
//         if(picks[i] === 0){
//             i++;
//             k = 5;
//         }else if(i <= minerals[j++]){
//             result++;
//             k--;
//         }else{
//             result += Math.pow(5, i - minerals[j++]);
//             k--;                
//         }
//         if(k === 0){
//             picks[i] = picks[i] - 1;
//         }
//     }
//     return result;
// }

const solution = (picks, minerals) => {
    let result = 0;
    const fatigue = [
        [1, 1, 1],   // Diamond pickaxe
        [5, 1, 1],   // Iron pickaxe
        [25, 5, 1]   // Stone pickaxe
    ];
    const mapping = { diamond: 0, iron: 1, stone: 2 };

    // Convert mineral names to numeric values
    minerals = minerals.map(m => mapping[m]);

    // Group minerals into sets of 5
    let groups = [];
    for (let i = 0; i < minerals.length; i += 5) {
        groups.push(minerals.slice(i, i + 5));
    }

    // Only process as many groups as we have pickaxes
    let totalPicks = picks.reduce((sum, v) => sum + v, 0);
    groups = groups.slice(0, totalPicks);

    // Sort groups by difficulty (more diamonds first)
    groups.sort((a, b) => {
        const countA = [0, 0, 0];
        const countB = [0, 0, 0];

        a.forEach(m => countA[m]++);
        b.forEach(m => countB[m]++);

        return countB[0] - countA[0] || countB[1] - countA[1] || countB[2] - countA[2];
    });

    // Process groups with the best available pickaxe
    for (const group of groups) {
        let pickIdx = picks.findIndex(p => p > 0);
        if (pickIdx === -1) break; // No picks left

        picks[pickIdx]--; // Use the pickaxe

        for (const mineral of group) {
            result += fatigue[pickIdx][mineral];
        }
    }

    return result;
};
