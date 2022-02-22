function solution(N, road, K) {
  const matrix = [];
  const visited = [];
  const distance = [];

  function getSmallIndex() {
    let min = Infinity;
    let index = 0;
    for (let i = 0; i < N; i++) {
      if (distance[i] < min && !visited[i]) {
        min = distance[i];
        index = i;
      }
    }
    return index;
  }

  function dijkstra(start) {
    for (let i = 0; i < N; i++) {
      distance[i] = matrix[start][i];
    }
    visited[start] = true;
    for (let i = 0; i < N - 2; i++) {
      let current = getSmallIndex();
      visited[current] = true;
      for (let j = 0; j < N; j++) {
        if (!visited[j]) {
          if (distance[current] + matrix[current][j] < distance[j]) {
            distance[j] = distance[current] + matrix[current][j];
          }
        }
      }
    }
  }

  // 초기 행렬 생성
  for (let i = 0; i < N; i++) {
    matrix.push(new Array(N).fill(Infinity));
    visited.push(false);
  }

  // 자신의 노드는 0 으로 업데이트
  for (let i = 0; i < N; i++) {
    matrix[i][i] = 0;
  }

  // road 정보 업데이트
  road.forEach((el) => {
    const y = el[0] - 1;
    const x = el[1] - 1;
    const distance = el[2];
    if (matrix[y][x] > distance && matrix[x][y] > distance) {
      matrix[y][x] = distance;
      matrix[x][y] = distance;
    }
  });

  dijkstra(0);
  return distance.filter((el) => el <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    4
  )
);

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); //
