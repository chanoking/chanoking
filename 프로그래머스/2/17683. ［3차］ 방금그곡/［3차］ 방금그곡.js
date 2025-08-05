const solution = (m, musicinfos) => {
  // 음표를 배열로 변환하는 함수 (정규식 활용)
  const parseNotes = (str) => str.match(/[A-G]#?/g);

  const mArr = parseNotes(m);
  let answer = "(None)";
  let maxPlayTime = 0;

  for (const info of musicinfos) {
    let [start, end, title, note] = info.split(",");

    // 시간 계산 (분 단위)
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    const playTime = eh * 60 + em - (sh * 60 + sm);

    // 악보 파싱
    const noteArr = parseNotes(note);

    // 재생된 악보 생성 (playTime 길이만큼 반복)
    const played = Array.from(
      { length: playTime },
      (_, i) => noteArr[i % noteArr.length]
    );

    // 패턴 검색
    for (let i = 0; i <= played.length - mArr.length; i++) {
      if (mArr.every((v, j) => played[i + j] === v)) {
        // 더 긴 곡이면 갱신
        if (playTime > maxPlayTime) {
          maxPlayTime = playTime;
          answer = title;
        }
        break; // 하나 찾으면 더 검사할 필요 없음
      }
    }
  }

  return answer;
};


