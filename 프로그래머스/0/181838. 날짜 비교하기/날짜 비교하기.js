const solution = (date1, date2) => {
    const date1ToString = Number(date1.join(''))
    const date2ToString = Number(date2.join(""))
    return date1ToString < date2ToString ? 1 : 0;
}