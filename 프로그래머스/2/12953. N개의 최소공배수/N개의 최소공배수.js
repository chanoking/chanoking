const solution = (arr) => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b); // Recursive GCD function
    const lcm = (a, b) => (a * b) / gcd(a, b);          // LCM using GCD
    
    return arr.reduce((acc, cur) => lcm(acc, cur), 1);  // Reduce array by applying LCM iteratively
}
