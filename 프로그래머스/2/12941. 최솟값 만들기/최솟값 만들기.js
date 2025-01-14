const solution = (A, B) => {
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    return A.reduce((i,j,k) => i + j * B[k], 0);
}