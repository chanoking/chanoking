const reverse = (str) => {
    return str.slice(1, str.length - 1).split('').map(v => v === ")" ? v = "(" : v = ")").join('');
}

const solution = (w) => {
    return reverse(w);
}