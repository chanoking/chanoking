// const solution = (n) => {
//     // const oneTwoFour = ['1', '2', '4'];
//     // n--;
//     // let word = '';
//     // while(n >= 0){
//     //     word = oneTwoFour[n % 3] + word;
//     //     n = Math.floor(n / 3) - 1;
//     // }
//     // return word;
//     return n;
// }

const solution = (n) => {
    return n === 0 ? '' : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}