const solution = (n) => {
    let a = 0, b = 1, result = 0
    for(let i = 2; i <= n; i++){
        result = (a + b) % 1234567;
        a = b;
        b = result;
    }
    return result;
}