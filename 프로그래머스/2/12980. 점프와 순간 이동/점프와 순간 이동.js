const solution = (N) => {
    let power = 0;

    while (N > 0) {
        if (N % 2 === 0) {  // If N is even, divide by 2 (no power used)
            N /= 2;
        } else {             // If N is odd, jump (subtract 1 and use 1 power)
            N -= 1;
            power++;
        }
    }

    return power;
}
