// DFS

function solution(n, computers) {
  let answer = 0;

  let visited = new Array();
  for (let i = 0; i < computers.length; i++) {
    visited[i] = false;
  }

  function dfs(graph, node, visited) {
    visited[node] = true;
    graph[node].forEach((element, index) => {
      if (index != node) {
        if (visited[index] === false && graph[node][index] === 1) {
          dfs(graph, index, visited);
        }
      }
    });
  }

  visited.forEach((element, index) => {
    if (element === false) {
      answer += 1;
      dfs(computers, index, visited);
    }
  });

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 0, 1],
  ])
);

console.log(
  solution(5, [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ])
);

console.log(
  solution(5, [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ])
);
