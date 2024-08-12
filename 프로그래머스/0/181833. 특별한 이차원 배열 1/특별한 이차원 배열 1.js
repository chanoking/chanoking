const solution = (n) => {
    const result = []

    for(let i = 0; i < n; i++){
        const arr = []
        for(let j = 0; j < n; j++){
          if(i === j){
            arr.push(1)  
          }else{
              arr.push(0)
          }
        }
        result.push(arr)
    }
    return result;
}