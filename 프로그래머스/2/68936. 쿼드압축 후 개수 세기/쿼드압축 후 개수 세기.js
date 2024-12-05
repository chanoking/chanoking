const compression = (matrix) => {
    const flatArray = matrix.flat();
    const allEqual = flatArray.every(v => v === flatArray[0]);
    return allEqual ? [flatArray[0]] : matrix;
};

const divideArrayRecursively = (arr) => {
    const size = arr.length;
    if (size === 1) return arr.flat(); // 더 이상 쪼갤 수 없을 경우 반환

    const halfSize = size / 2;
    const result = [];
    
    for (let i = 0; i < size; i += halfSize) {
        for (let j = 0; j < size; j += halfSize) {
            const subMatrix = [];
            for (let x = i; x < i + halfSize; x++) {
                subMatrix.push(arr[x].slice(j, j + halfSize));
            }
            const compressed = compression(subMatrix);
            if (Array.isArray(compressed)) {
                result.push(...divideArrayRecursively(compressed)); // 압축되지 않으면 재귀 호출
            } else {
                result.push(compressed); // 압축된 값 저장
            }
        }
    }

    return result;
};

const countElements = (arr) => {
    const flatArray = arr.flat(Infinity);
    const zeroCount = flatArray.filter(v => v === 0).length;
    const oneCount = flatArray.filter(v => v === 1).length;

    return [zeroCount, oneCount];
};

const solution = (arr) => {
    // 초기 전체 배열이 압축 가능한지 확인
    const initialCompression = compression(arr);
    if (initialCompression.length === 1) {
        // 이미 압축 가능하면 바로 결과 반환
        return initialCompression[0][0] === 0 ? [1, 0] : [0, 1];
    }

    const divided = divideArrayRecursively(arr);
    return countElements(divided);
};
