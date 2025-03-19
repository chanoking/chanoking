// const solution = (w) => {
//     let cnt = 0;
//     let u, v;
//     for(let i = 0; i < w.length; i++){
//         w[i] === "(" ? cnt++ : cnt--;
//         if(cnt === 0){
//             u = w.slice(0, i + 1);
//             v = w.slice(i + 1);
//             break;
//         }
//     }
//     return v;
// }

function solution(w) {
  if (w === "") return ""; // 빈 문자열인 경우, 빈 문자열 반환
  let u, v;
  let cnt = 0;

  for (let i = 0; i < w.length; i++) {
    w[i] === "(" ? cnt++ : cnt--;
    // 균형잡힌 괄호 문자열로 더이상 분리 될 수 없는 인덱스 찾기
    if (cnt === 0) {
      // u, v로 분리
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  }

  if (!isPerfect(u)) {
    // u가 올바른 괄호 문자열이 아니므로 4 과정 수행
    let str = "";
    str += `(${solution(v)})`; // 4-1, 4-2, 4-3과정 한번에 수행
    for (let i = 1; i < u.length - 1; i++) {
      // 첫번째, 마지막 문자 생략 후 뒤집에서 붙이기
      u[i] === "(" ? (str += ")") : (str += "(");
    }
    return str; // 반환
  }

  return u + solution(v); // u가 올바른 문자열일 때 3 과정 수행
}

function isPerfect(str) {
  // 올바른 괄호 문자열을 판단하는 함수
  if (str === "" || str[0] === ")" || str[str.length - 1] === "(") return false;
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === "(" ? cnt++ : cnt--;
  }
  return cnt === 0 ? true : false;
}