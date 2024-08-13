const solution = (myString) => {
    const str = 'l'
    const abc = str.charAt(0)
    let arr = myString.split('')
    return arr.map((e) => e.charAt(0) < abc ? e = str : e).join('');
}