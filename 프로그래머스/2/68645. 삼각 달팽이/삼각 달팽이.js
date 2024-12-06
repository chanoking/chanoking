const solution = (n) => {
    const t = Array(n).fill().map((_, i) => Array(i+1).fill());
    let row = -1, col = 0, fill = 0;
    for(let i = n; i > 0; i -= 3){
        t[++row][col] = ++fill;
        for(let j = 0; j < i - 1; j++) t[++row][col] = ++fill;
        for(let j = 0; j < i - 1; j++) t[row][++col] = ++fill;
        for(let j = 0; j < i - 2; j++) t[--row][--col] = ++fill;
    }
    return t.flat();
}