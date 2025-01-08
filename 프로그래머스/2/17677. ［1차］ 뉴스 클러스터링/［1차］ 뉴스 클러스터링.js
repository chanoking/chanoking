const solution = (str1, str2) => {
    // Function to get valid bigrams
    function getValidBigrams(str) {
        const bigrams = [];
        for (let i = 0; i < str.length - 1; i++) {
            const bigram = str.slice(i, i + 2);
            // Only add valid bigrams (2 alphabetic characters)
            if (/^[a-zA-Z]{2}$/.test(bigram)) {
                bigrams.push(bigram.toLowerCase());
            }
        }
        return bigrams;
    }

    let str1Arr = getValidBigrams(str1);
    let str2Arr = getValidBigrams(str2);

    // If either string has no valid bigrams, return 65536
    if (str1Arr.length === 0 && str2Arr.length === 0) {
        return 65536;
    }

    // Count intersection (common bigrams) accounting for duplicates
    let intersection = 0;
    let str1Map = {};
    let str2Map = {};

    // Count occurrences of bigrams in both arrays
    str1Arr.forEach(bigram => str1Map[bigram] = (str1Map[bigram] || 0) + 1);
    str2Arr.forEach(bigram => str2Map[bigram] = (str2Map[bigram] || 0) + 1);

    // Calculate intersection by finding the minimum occurrence of each bigram
    for (let bigram in str1Map) {
        if (str2Map[bigram]) {
            intersection += Math.min(str1Map[bigram], str2Map[bigram]);
        }
    }

    // Calculate union
    let union = str1Arr.length + str2Arr.length - intersection;

    // Calculate the Jaccard similarity score, scaled by 65536
    return Math.floor((intersection / union) * 65536);
};

