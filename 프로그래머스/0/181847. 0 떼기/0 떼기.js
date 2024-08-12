const solution = (n_str) => {
    let arr = n_str.split('')
    const key = "0"
    while(arr[0] === key){
        arr = arr.slice(1)
    }
    
    return arr.join('');
}