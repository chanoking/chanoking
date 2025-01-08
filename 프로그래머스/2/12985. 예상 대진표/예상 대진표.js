// const solution = (n, a, b) => {
//     let round = 0;    
//     const numbered = Array.from({length: n}, (_, i) => i + 1);
    
//     const splitIntoPairs = (arr) => {
//         // Split the array into pairs (or subarrays of length 2)
//         const pairs = [];
//         for (let i = 0; i < arr.length; i += 2) {
//             pairs.push(arr.slice(i, i + 2));
//         }
//         return pairs;
//     };

//     const reduceUntilSingleArray = (arr) => {
//         // Continue reducing the array by splitting into pairs until we have one pair left
//         while (arr.length > 1) {
//             arr = splitIntoPairs(arr.flat());
//             round++; // Count each round of splitting
//         }
//     };
    
//     reduceUntilSingleArray(numbered);
//     return round; // Return the count of rounds
// };

// const solution = (n, a, b) => {
//     let round = 0;    
//     const numbered = Array.from({ length: n }, (_, i) => i + 1);

//     const splitIntoPairs = (arr) => {
//         // Split the array into pairs (or subarrays of length 2)
//         const pairs = [];
//         for (let i = 0; i < arr.length; i += 2) {
//             pairs.push(arr.slice(i, i + 2));
//         }
//         return pairs;
//     };

//     const reduceUntilSingleArray = (arr) => {
//         // Continue reducing the array by splitting into pairs until we have one pair left
//         while (arr.length > 1) {
//             arr = splitIntoPairs(arr);  // No need to flatten, just split the pairs
//             round++; // Count each round of splitting
//         }
//     };
    
//     reduceUntilSingleArray(numbered);
//     return round; // Return the count of rounds
// };

const solution = (n, a, b) => {
    let round = 0;

    while (a !== b) {
        // Move to the next round by dividing both a and b by 2 and rounding up
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }

    return round;
};
