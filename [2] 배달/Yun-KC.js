// 풀이 1
function solution(N, road, K) {
  const graph = new Graph(N + 1);
  road.forEach((el) => graph.addEdge(...el));
  const visited = Array(N + 1).fill(0);
  const resultSet = new Set();
  function test(s, visited, result = 0) {
    if (result > K) {
      return;
    }
    if (result <= K) {
      resultSet.add(s);
    }
    const edges = graph.adj[s];
    for (let i = 1; i < edges.length; i++) {
      if (edges[i] === 0) continue;
      if (visited[i] === 0) {
        visited[i] = 1;
        test(i, visited, result + edges[i]);
        visited[i] = 0;
      }
    }
  }
  visited[1] = 1;
  test(1, visited);

  return [...resultSet].length;
}
class Graph {
  constructor(v) {
    this.adj = Array(v)
      .fill(0)
      .map((el) => Array(v).fill(0));
  }
  addEdge(v, w, g) {
    if (this.adj[v][w] === 0) {
      this.adj[v][w] = g;
      this.adj[w][v] = g;
    } else if (this.adj[v][w] > g) {
      this.adj[v][w] = g;
      this.adj[w][v] = g;
    }
  }
}

// 풀이 2
function solution(N, road, K) {
  // 가중치 그래프를 2차 배열로 나타냅니다.
  const graph = new Graph(N + 1);
  road.forEach((el) => graph.addEdge(...el));

  // 지역 1에서 가장 가중치가 작은 지역부터 탐색하기 위한 변수입니다.
  let standard = 1;

  // 지역 1에서부터 모든 지역의 거리 배달시간을 나타낼 배열과 해당 지역의 검색 여부를 파악할 배열입니다.
  const copiedArr = [...graph.adj[1]];
  const visited = Array(N + 1).fill(0);

  while (standard <= K) {
    // 지역 1에서부터 가중치가 낮은 지역의 인덱스를 찾습니다.
    const idx = copiedArr.findIndex((el, idx) => {
      if (el === standard && visited[idx] === 0) {
        return true;
      } else {
        return false;
      }
    });
    // 지역이 -1이면 가중치가 standard랑 같은 지역이 없다는 뜻입니다.
    if (idx !== -1) {
      visited[idx] = 1;
      graph.adj[idx].forEach((el, idxInCallback) => {
        // 지역1의 경우와 검색한 지역의 가중치가 0인 지역은 패스합니다.
        if (idxInCallback === 1 || el === 0) return;
        // 만약 지역 1에서 못가는 지역이거나, 다른 지역을 경유해 가는 방법이 가중치가 더 작을 경우 값을 교체합니다.
        if (copiedArr[idxInCallback] > el + copiedArr[idx] || copiedArr[idxInCallback] === 0) {
          copiedArr[idxInCallback] = el + copiedArr[idx];
        }
      });
    } else {
      standard++;
      continue;
    }
  }
  // 배달 가능 지역 K보다 이하인 값들만 남도록 필터링합니다. 그리고 자기 자신 지역인 1을 더해서 리턴합니다.
  return (
    copiedArr.filter((el, idx) => {
      if (idx === 0 || idx === 1 || el === 0) return false;
      return el <= K;
    }).length + 1
  );
}
class Graph {
  constructor(v) {
    this.adj = Array(v)
      .fill(0)
      .map((el) => Array(v).fill(0));
  }
  addEdge(v, w, g) {
    if (this.adj[v][w] === 0) {
      this.adj[v][w] = g;
      this.adj[w][v] = g;
    } else if (this.adj[v][w] > g) {
      this.adj[v][w] = g;
      this.adj[w][v] = g;
    }
  }
}
