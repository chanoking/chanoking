const solution = (word) => {
    const dictionary = [];
    const list = ['A', 'E', 'I', 'O', 'U'];

    // 재귀를 사용해 모든 조합 생성
    const generateWords = (current) => {
        if (current.length > 5) return; // 단어 길이가 5를 초과하면 종료
        dictionary.push(current); // 단어를 사전에 추가
        for (let char of list) {
            generateWords(current + char); // 다음 글자 추가
        }
    };

    generateWords(""); // 빈 문자열에서 시작

    // 주어진 단어의 인덱스 반환 (1-based index)
    return dictionary.indexOf(word);
};
