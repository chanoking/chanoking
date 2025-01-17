const solution = (n) => {
    const oneTwoFour = ['1', '2', '4'];
    let word = '';
    n--; // Convert to zero-based index

    while (n >= 0) {
        word = oneTwoFour[n % 3] + word; // Map remainder to 'A', 'B', 'C'
        n = Math.floor(n / 3) - 1;     // Reduce n, accounting for zero-based indexing
    }

    return word;
};
