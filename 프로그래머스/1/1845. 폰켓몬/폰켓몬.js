const solution = (nums) => {
    const uniqueArrLen = [...new Set(nums)].length;
    const half = nums.length / 2;
    return uniqueArrLen <= half ? uniqueArrLen : half;
}