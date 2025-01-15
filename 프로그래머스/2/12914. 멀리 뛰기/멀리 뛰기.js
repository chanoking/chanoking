// const solution = (n) => {
//     // Handle base cases
//     if (n === 0) return 1;
//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     let dp = [0, 1, 2]; // Base cases: dp[0] = 1, dp[1] = 1, dp[2] = 2

//     // Fill the dp array using the recurrence relation
//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2]; // ways(i) = ways(i-1) + ways(i-2)
//     }

//     return dp[n]; // Return the number of ways to reach point n
// };

function solution(n) {
    let a = 1, b = 2;
    for(let i = 3; i <= n; i++) {
        [a, b] = [b, a];
        b = (a + b) % 1234567;
    }
    return n == 1 ? 1 : b;
}