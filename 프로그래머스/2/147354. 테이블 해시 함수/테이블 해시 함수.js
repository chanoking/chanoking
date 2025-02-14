function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
      if(a[col - 1] === b[col - 1]){
          return b[0] - a[0];
      }else{
          return a[col - 1] - b[col - 1];   
      }
  })
  const sums = Array(row_end - row_begin + 1).fill(0)
  for(let i = row_begin - 1; i <= row_end - 1; i++){
      for(let j = 0; j < data[i].length; j++){
          sums[i - row_begin + 1] += data[i][j] % (i + 1);
      }
  }
  
  return sums.reduce((acc, cur) => acc ^ cur, 0);
}