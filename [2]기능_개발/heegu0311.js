function solution(progresses, speeds) {
  const answer = [];
  const days = []; // 소요일수 days 선언
  // 기능 개발 소요일수(days)를 계산 (cell(100 - progresses[0] / speeds[0]))
  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  console.log("days", days);
  // 배포 기능 갯수 answer 구하기
  // days 순회하면서 배포할 기능 갯수(count) 뒤에 요소의 숫자가 더 큰 경우 answer.push(count)
  let tempArr = [];
  while (days.length) {
    tempArr.push(days.shift());
    console.log(tempArr, days);
    if (days[0] > tempArr[0]) {
      answer.push(tempArr.length);
      tempArr = [];
    }
    if (days.length === 0) {
      answer.push(tempArr.length);
    }
  }
  console.log("안녕하세요");
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
