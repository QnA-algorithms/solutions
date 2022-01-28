function checkPerson(place) {
  // place는 시험장을 뜻함
  const coordArr = []; // 사람이 앉아있는 자리의 좌표 coordArr
  for (let x = 0; x < place.length; x++) {
    for (let y = 0; y < place[x].length; y++) {
      if (place[x][y] === "P") coordArr.push([x, y]);
    }
  }
  return coordArr;
}

function checkCombiSocialDistancing(arr, place) {
  // nC2 조합 찾기
  let count = 0; // 거리두기 미준수 건 count
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // 조합의 요소별 거리두기 확인하기
      const distanceX = Math.abs(arr[i][0] - arr[j][0]);
      const distanceY = Math.abs(arr[i][1] - arr[j][1]);
      if (distanceX + distanceY <= 2) {
        if (distanceX === 2 || distanceY === 2) {
          const middleX = (arr[i][0] + arr[j][0]) / 2;
          const middleY = (arr[i][1] + arr[j][1]) / 2;
          if (place[middleX][middleY] === "O") {
            count++;
          }
        } else if (distanceX === 1 && distanceY === 1) {
          if (
            place[arr[i][0]][arr[j][1]] === "O" ||
            place[arr[j][0]][arr[i][1]] === "O"
          )
            count++;
        } else {
          count++;
        }
      }
    }
  }
  if (count) return 0;
  else return 1;
}

function solution(places) {
  var answer = [];
  const coordPersons = [];
  for (let i = 0; i < places.length; i++) {
    coordPersons.push(checkPerson(places[i]));
    answer.push(checkCombiSocialDistancing(coordPersons[i], places[i]));
  }
  console.log(answer);
  return answer;
}

solution([
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);
