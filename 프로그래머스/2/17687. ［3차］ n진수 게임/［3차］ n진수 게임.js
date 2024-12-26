const solution = (n, t, m, p) => {
    let result = '';
    let answer = '';
    for(let i = 0; i < t * m; i ++){
        result += i.toString(n);
    }
    for(let i = p - 1; i < t * m; i += m){
        answer += result[i];
    }
    return answer.toUpperCase();
}