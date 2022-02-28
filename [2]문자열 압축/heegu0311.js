function solution(s) {
  const wordLength = Math.floor(s.length / 2);
  const disctionary = [];
  if (s.length === 1) return 1;
  for (let i = wordLength; i > 0; i--) {
    let j = 0;
    let repeat = s.slice(0, i);
    let compressedWord = "";
    let remainder = "";
    let count = 0;
    while (j <= s.length) {
      if (repeat === s.slice(j, j + i)) {
        count++;
      } else {
        compressedWord += count > 1 ? `${count}${repeat}` : repeat;
        repeat = s.slice(j, j + i);
        count = 1;
      }
      j += i;
      if (j > s.length) compressedWord += s.slice(j - i);
    }
    console.log(compressedWord);
    disctionary.push(compressedWord.length);
  }
  return Math.min(...disctionary);
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
