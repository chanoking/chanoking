const solution = (N) => {
    if(N === 1) return 1;
    const NArr = Array.from(N.toString(2));
    return NArr.reduce((a, b) => +a + +b);
}