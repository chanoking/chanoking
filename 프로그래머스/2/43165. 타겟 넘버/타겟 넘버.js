function solution(nums, target) {
    let count = 0;

    function backtrack(index, total) {
        if (index === nums.length) {
            if (total === target) {
                count++;
            }
            return;
        }

        // +를 사용하는 경우
        backtrack(index + 1, total + nums[index]);
        // -를 사용하는 경우
        backtrack(index + 1, total - nums[index]);
    }

    backtrack(0, 0);
    return count;
}

