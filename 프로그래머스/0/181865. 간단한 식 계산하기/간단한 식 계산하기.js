const solution = (binomial) => {
    return binomial.includes("+") ? binomial.split(' + ').map((e) => Number(e)).reduce((acu,cur) => acu + cur) : binomial.includes(" - ") ? binomial.split(' - ').map((e) => Number(e)).reduce((acu, cur) => acu - cur) : binomial.split(' * ').map((e) => Number(e)).reduce((acu, cur) => acu * cur);
    
    
}

// const solution = (binomial) => {
//     return Number("43 + 12")
// }