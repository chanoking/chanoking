// const solution = (k, dungeons) => {
//     let count = 0;
//     let mini = [];
//     let degree = [];
//     dungeons.forEach(d => mini.push(d[0]));
//     dungeons.forEach(d => degree.push(d[1]));
    
//     const totalDegree = dungeons.reduce((acc, cur) => acc + cur[1], 0);
//     const miniMax = Math.max(...mini);
    
//     if(totalDegree <= k && k >= miniMax) return dungeons.length;
//     while(let i = 0; i < dungeons.length){
//         if(k === miniMax) k -= dungeons[i++][1]
//     }
    
    

// }

function solution(k, dungeons) {
  // 던전의 순열을 만들기 위한 헬퍼 함수
  function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let rest = arr.slice(0, i).concat(arr.slice(i + 1));
      let perms = getPermutations(rest);
      for (let perm of perms) {
        result.push([arr[i]].concat(perm));
      }
    }

    return result;
  }

  // 던전 순열을 모두 계산
  let permutations = getPermutations(dungeons);
  let maxCount = 0;

  // 모든 던전 순열에 대해 탐험할 수 있는 최대 횟수 계산
  for (let perm of permutations) {
    let currentK = k;
    let count = 0;

    for (let dungeon of perm) {
      let minRequirement = dungeon[0];
      let reduction = dungeon[1];

      if (currentK >= minRequirement) {
        currentK -= reduction;
        count++;
      } else {
        break;  // 더 이상 탐험할 수 없으면 종료
      }
    }

    // 최대 탐험 횟수 갱신
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
