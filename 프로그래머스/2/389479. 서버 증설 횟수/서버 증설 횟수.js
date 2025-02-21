// const solution = (players, m, k) => {
//     const timeline = Array(players.length).fill(0);
//     let i = 0;
//     let time = k;
//     let total = m;
//     let temp;
//     while(players.length > i){
//         if(total <= players[i]){
//             temp = Math.floor(players[i] / m);
//             timeline[i] += temp;
//             total *= temp;
//             i++;
//         }else{
//             while(total >= players[i]){
//                 time--;
//                 i++;
//                 if(time === 0){
//                     total = m;
//                     time = k;
//                     break;
//                 }
//             }
//         }
//     }
//     return timeline.reduce((acc, cur) => acc + cur, 0);
// }


function solution(players, m, k) {
    let servers = Array(24).fill(0);
    let answer = 0;

    players.forEach((playerCnt, sTime) => {
        if (parseInt(playerCnt / m) > servers[sTime]) {
            let needServerCnt = parseInt(playerCnt / m) - servers[sTime];

            for (let i = 0; i < k; ++i) {
                if (sTime + i <= 23) {
                    servers[sTime + i] = servers[sTime + i] + needServerCnt;
                }
            }
            answer += needServerCnt;
        }
    });

    return answer;
}