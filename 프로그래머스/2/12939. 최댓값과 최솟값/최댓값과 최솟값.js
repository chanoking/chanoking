const solution = (s) => {
    let result = '';
    let arr = s.split(' ');
    arr = arr.map(v => Number(v));
    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}