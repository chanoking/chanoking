const solution = (m, musicInfo) => {
  const parseNotes = (str) => str.match(/[A-G]#?/g);
  const parseM = parseNotes(m);
  let answer = "(None)";
  let maxPlayTime = 0;
  for (let info of musicInfo) {
    const [start, end, title, notes] = info.split(",");
    const [sHour, sMin] = start.split(":").map(Number);
    const [eHour, eMin] = end.split(":").map(Number);
    const playedTime = eHour * 60 + eMin - (sHour * 60 + sMin);
    const parsedNotes = parseNotes(notes);

    const playedNotes = Array.from(
      { length: playedTime },
      (_, i) => parsedNotes[i % parsedNotes.length]
    );

    for (let i = 0; i <= playedNotes.length - parseM.length; i++) {
      if (parseM.every((note, idx) => note === playedNotes[i + idx])) {
        if (maxPlayTime < playedTime) {
          maxPlayTime = playedTime;
          answer = title;
        }
        break;
      }
    }
  }
  return answer;
};