function solution(lottos, win_nums) {
  const answer = [];
  let num_match = 0;
  let num_zero = 0;

  for (let el of lottos) {
    if (win_nums.includes(el)) num_match++; // 숫자가 매칭되는게 몇개인지 확인하기
    if (el === 0) num_zero++; // 낙서로 지워진 숫자 '0' 개수 확인
  }
  if (lottos.every((el) => el === 0)) return [1, 6];
  // 모두 숫자가 맞을 때
  else if (num_match === 0) return [6, 6];
  // 모두 숫자가 다른 경우
  else {
    answer.push(7 - (num_match + num_zero));
    answer.push(7 - num_match);
    return answer;
  }
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [ 3, 5 ]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [ 1, 6 ]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [ 1, 1 ]
