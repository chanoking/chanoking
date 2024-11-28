const solution = (s) => {
    let str = '';
    let count = 0;
    let count0 = 0;
    while(s !== '1'){
        count0 += s.split('').filter(c => c === '0').length;
        s = s.replace(/0/g,'').length.toString(2);
        count++;
    }
    return [count, count0];
}