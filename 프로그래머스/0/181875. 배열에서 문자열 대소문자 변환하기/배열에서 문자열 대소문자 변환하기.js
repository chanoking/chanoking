const solution = (strArr) => {
    return strArr.map((e) => strArr.indexOf(e) % 2 === 0 ? e.toLowerCase() : e.toUpperCase())
}