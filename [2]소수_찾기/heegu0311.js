function isPrime(num) {
  let count = 1;
  for (let i = 2; i <= num; i++) {
    if (!(num % i)) count++;
  }
  if (count === 2) return true;
  else return false;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((e) => [e]);

  arr.forEach((fixed, index) => {
    const next = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const permutations = getPermutations(next, selectNumber - 1);
    const result = permutations.map((e) => [fixed, ...e]);
    results.push(...result);
  });

  return results;
};

function solution(numbers) {
  var answer = 0;
  const arr = numbers.split(""); // 종이 조각을 배열의 요소로 만듭니다.
  arr.sort();
  const cases = []; // 종이 조각 요소 배열의 멱집합을 구합니다.
  const powerSet = (idx, number) => {
    // 재귀 함수이기 때문에 탈출 조건을 만듭니다.
    if (idx === numbers.length) {
      // 만약, idx와 numbers의 길이가 같다면(마지막까지 검토한 경우) result에 number를 삽입하고 push합니다.
      cases.push(number);
      return;
    }
    // idx번째 요소가 포함되지 않는 경우
    powerSet(idx + 1, number);
    // idx번째 요소가 포함되는 경우
    powerSet(idx + 1, [...number, numbers[idx]]);
  };
  powerSet(0, []);

  const dupPermutatedCases = [];
  const permutatedNumbers = [];
  cases.forEach((el) => {
    dupPermutatedCases.push(...getPermutations(el, el.length));
  });

  dupPermutatedCases.forEach((el) => {
    if (!permutatedNumbers.includes(Number(el.join(""))))
      permutatedNumbers.push(Number(el.join("")));
  });

  answer = permutatedNumbers.filter((el) => isPrime(el)).length;

  return answer;
}

console.log(solution("17"));
console.log(solution("011"));
