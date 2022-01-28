
function solution(progresses, speeds) {
  //하루에 한번씩 speeds만큼 progressess 증가
  //progresses가 비어있을 때 까지 반복
  //하루마다 개발의 진행량을 저장
  //작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다. -> progressess의 앞번째가 100이 넘으면 배포
  //progressess의 맨앞이 100이 넘으면 배포가 되니까 제거하고, 그 다음 배포완료된게 있는지 진행 -> 결과 배열에 넣기
  let output = [];
  while (progresses.length !== 0) {
    let count = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] + speeds[i];
    }
    // console.log(progresses)
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    // console.log(count)
    if (count > 0) {
      output.push(count);
    }
    // console.log(output)
  }
  return output;
}
