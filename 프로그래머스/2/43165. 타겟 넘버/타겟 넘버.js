const solution = (numbers, target) => {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    if((sum + target) % 2 !== 0 || target > numbers) return 0;
    const newTarget = (sum + target) / 2;
    const dp = Array(newTarget + 1).fill(0);
    dp[0] = 1;
    for(let num of numbers){
        for(let j = newTarget; j >= num; j--){
            dp[j] += dp[j - num]
        }
    }
    return dp[newTarget];
}