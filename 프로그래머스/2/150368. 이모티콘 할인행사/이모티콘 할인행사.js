const Permutation = (arr, selectNum) => {
  const result = [];
  if(selectNum === 1) return arr.map(v => [v]);
  arr.forEach((v, i, arr) => {
      const fixed = v;
      const restArr = arr;
      const permutationArr = Permutation(restArr, selectNum - 1);
      const combineFixed = permutationArr.map(v => [fixed, ...v]);
      result.push(...combineFixed);
  })
  return result;
}

const solution = (users, emoticons) => {
  const result = [];
  const permutation = Permutation([10, 20, 30, 40], emoticons.length);
  permutation.forEach(combi => {
  let service = 0;
      const costs = Array(users.length).fill(0);
      combi.forEach((c, ci) =>{
          users.forEach((u, ui) => {
              if(c >= u[0]){
                  costs[ui] += emoticons[ci] * ((100 - c) / 100);
              }
          })
      })
      
      let sum = 0;
      for(let i = 0; i < users.length; i++){
          if(users[i][1] > costs[i]){
              sum += costs[i];    
          }else{
              service++;
          }
      }
      result.push([service, sum]);
  })
  return result.sort((a,b) => {
      if(a[0] > b[0]){
          return b[0] - a[0]
      }else if(a[0] === b[0]){
          return b[1] - a[1]
      }
  })[0];
}