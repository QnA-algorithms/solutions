// DFS
// https://gyoogle.dev/blog/algorithm/DFS%20&%20BFS.html 참고
// https://data-make.tistory.com/325 참고
// 재귀 DFS 아이패드로 직접 그림그리면서 직접 풀었음.

function solution(numbers, target) {
  let count = 0;
  let sum = 0;
  const result = [];
  dfs(numbers, target, count, sum, 1, result);
  dfs(numbers, target, count, sum, -1, result);
  return result.length;
}

function dfs(numbers, target, count, sum, sign, result) {
  //   console.log("dfs 함수 시작", sign, sum, result);
  const addNum = numbers[count] * sign;
  sum += addNum;
  if (count === numbers.length - 1) {
    if (sum === target) result.push(sum);
    // console.log("dfs 함수 종료", count, sum, result);
    return;
  }
  dfs(numbers, target, count + 1, sum, 1, result);
  dfs(numbers, target, count + 1, sum, -1, result);
}

solution([1, 1, 1, 1, 1], 3);
solution([4, 1, 2, 1], 4);
