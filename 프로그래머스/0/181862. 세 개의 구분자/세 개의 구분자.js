// const solution = (myStr) => {
//     const tempArr = ["a" ,"b", "c"]
//     myStr = myStr.split(tempArr[0])
//     // myStr = myStr.join('').split(tempArr[1])
//     // myStr = myStr.join('').split(tempArr[2])
//     return myStr;
//     // return myStr.filter((e) => e !== "");
// }

// const solution = (myStr) => {
//     const tempArr = ["a" ,"b", "c"];

//     while(myStr.includes(help(tempArr))){
//         myStr = myStr.split(help(tempArr))
//         myStr = myStr.join().split(help(tempArr))
//     }
//     return myStr;
// }

// const help = (tempArr) => {
//     return tempArr.forEach((e) => e);
// } 

const solution = (myStr) => {
    const result = myStr.match(/[^abc]+/g);
    return result === null ? ["EMPTY"] : result;
}

