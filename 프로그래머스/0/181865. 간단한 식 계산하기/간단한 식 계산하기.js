const solution = (binomial) => {
    return binomial.includes("+") ? binomial.split(' + ').map((e) => Number(e)).reduce((acu,cur) => acu + cur) : binomial.includes(" - ") ? binomial.split(' - ').map((e) => Number(e)).reduce((acu, cur) => acu - cur) : binomial.split(' * ').map((e) => Number(e)).reduce((acu, cur) => acu * cur);
    
    
}

// const solution = (binomial) => {
//     return Number("43 + 12")
// }

// const solution = (binomial) => {
//     const obj = {
//         "+" : (a, b) => a + b,
//         "-" : (a, b) => a - b,
//         "*" : (a, b) => a * b
//     }
    
//     const [first, medium, last] = binomial.split(' ');
//     return obj[medium](first, last);
// }