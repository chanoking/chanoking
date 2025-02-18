function solution(n, k, enemy) {
  // 이분 탐색을 진행하기 위한 left, mid, right 변수 선언
  let [left, right] = [0, enemy.length]
  // console.log(mid);
  
  while(left <= right) {
      let mid = Math.floor((left+right)/2);
      // 해당 탐색에서 사용될 길이 내림차 순(k 소진을 위함)
      const curSlice = enemy.slice(0, mid).sort((a,b) => b-a);
      // console.log(curSlice);
      
      let noDie = k
      // 전쟁 후 남을 상대 병사의 수
      const curEnemy = curSlice.reduce((acc, cur) => {
          // 무적권이 있다면
          if(noDie > 0) {
              noDie--
              return acc
          }
          return acc+cur
      }, 0)
      // console.log(curEnemy);
      
      // 상대 병사를 무적권 한도 내에 모두 무찌를 수 있는가?
      if(n-curEnemy >= 0) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }
  return left-1;
}
