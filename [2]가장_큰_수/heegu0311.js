/* 
    URL : https://programmers.co.kr/learn/courses/30/lessons/42746
*/

// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((e) => [e]);

//   arr.forEach((fixed, index) => {
//     const next = [...arr.slice(0, index), ...arr.slice(index + 1)];
//     const permutations = getPermutations(next, selectNumber - 1);
//     const result = permutations.map((e) => [fixed, ...e]);
//     results.push(...result);
//   });

//   return results;
// };

// function solution(numbers) {
//   var answer = "";
//   const permuatedArr = getPermutations(numbers, numbers.length);
//   answer = Math.max(...permuatedArr.map((el) => Number(el.join(""))));
//   return String(answer);
// }

/*
    1차 제출 결과 (재귀로 순열을 먼저 구하는 방식을 사용해서 실패)

    테스트 1 〉	실패 (signal: aborted (core dumped))
    테스트 2 〉	실패 (런타임 에러)
    테스트 3 〉	실패 (signal: aborted (core dumped))
    테스트 4 〉	실패 (런타임 에러)
    테스트 5 〉	실패 (signal: aborted (core dumped))
    테스트 6 〉	실패 (signal: aborted (core dumped))
    테스트 7 〉	실패 (런타임 에러)
    테스트 8 〉	실패 (런타임 에러)
    테스트 9 〉	실패 (런타임 에러)
    테스트 10 〉	실패 (런타임 에러)
    테스트 11 〉	실패 (런타임 에러)
    테스트 12 〉	통과 (0.16ms, 30.4MB)
    테스트 13 〉	통과 (0.14ms, 30.1MB)
    테스트 14 〉	실패 (23.66ms, 40.9MB)
    테스트 15 〉	통과 (0.16ms, 30.2MB)
*/

// /* 2차 시도 : 실패 */
// function groupWithSameStartNum(arr) {
//   return arr.reduce((acc, cur) => {
//     if (
//       Array.isArray(acc[String(cur).charAt(0)]) &&
//       acc[String(cur).charAt(0)].length
//     ) {
//       return {
//         ...acc,
//         [String(cur).charAt(0)]: [...acc[String(cur).charAt(0)], cur],
//       };
//     }
//     return {
//       ...acc,
//       [String(cur).charAt(0)]: [cur],
//     };
//   }, {});
// }

// const getPermutations = (arr, selectNumber) => {
//   const results = [];
//   if (selectNumber === 1) return arr.map((e) => [e]);

//   arr.forEach((fixed, index) => {
//     const next = [...arr.slice(0, index), ...arr.slice(index + 1)];
//     const permutations = getPermutations(next, selectNumber - 1);
//     const result = permutations.map((e) => [fixed, ...e]);
//     results.push(...result);
//   });
//   return results;
// };

// function maxNumForEachStartNum(obj) {
//   if (Object.keys(obj).length === 1 && Object.keys(obj)[0] === "0")
//     obj["0"] = "0";
//   for (let key in obj) {
//     if (obj[key].length === 1) obj[key] = obj[key][0];
//     else {
//       if (key === "0") {
//         let zeros = "";
//         for (let i = 0; i < obj[key].length; i++) {
//           zeros += "0";
//         }
//         obj[key] = zeros;
//       } else {
//         const permutation = getPermutations(obj[key], obj[key].length).map(   // 순열 사용하면 절대 풀수 없음
//           (el) => {
//             return Number(el.join(""));
//           }
//         );
//         obj[key] = Math.max(...permutation);
//       }
//     }
//   }
//   return obj;
// }

// function solution(numbers) {
//   let answer = "";
//   const convertedToObj = groupWithSameStartNum(numbers); // 앞자리 숫자 기준으로 객체로 변환  예시 { '3': [ 3, 30, 34 ], '5': 5, '9': 9 }
//   console.log(convertedToObj);
//   const maxNums = maxNumForEachStartNum(convertedToObj); // 부분 집합 순열로 연산수를 줄여서 가장 큰 수를 찾는다.  { '3': 34330, '5': 5, '9': 9 }
//   console.log(maxNums);
//   let keys = Object.keys(maxNums).reverse(); // 역순으로 가장 큰 숫자들 붙여주기    9  5   34330
//   keys.forEach((key) => {
//     answer += maxNums[key];
//   });
//   return String(answer);
// }

// console.log(solution([9, 998, 0, 0]));
// console.log(solution([0, 0, 0, 0, 0]));
// console.log(solution([0, 0, 1, 0, 0]));
// console.log(solution([40, 403]));
// console.log(solution([0, 0, 70]));
// console.log(solution([1, 11, 111, 1111]));
// console.log(solution([10, 0, 0, 2, 101]));
// console.log(solution([21, 212]));
// console.log(solution([12, 121]));
// console.log(solution([3, 32]));
// console.log(solution([3, 33]));
// console.log(solution([3, 34]));
// console.log(solution([40, 403]));
// console.log(solution([40, 405]));
// console.log(solution([40, 404]));
// console.log(solution([12, 121]));
// console.log(solution([2, 22, 223]));
// console.log(solution([21, 212]));
// console.log(solution([41, 415]));
// console.log(solution([2, 22]));
// console.log(solution([70, 0, 0, 0]));
// console.log(solution([0, 0, 0, 0]));
// console.log(solution([0, 0, 0, 1000]));
// console.log(solution([12, 1213]));
// console.log(solution([2, 20, 200]));

// console.log(solution());

// /* 3차 시도 : 성공 */
function groupWithSameStartNum(arr) {
  return arr.reduce((acc, cur) => {
    if (
      Array.isArray(acc[String(cur).charAt(0)]) &&
      acc[String(cur).charAt(0)].length
    ) {
      return {
        ...acc,
        [String(cur).charAt(0)]: [...acc[String(cur).charAt(0)], cur],
      };
    }
    return {
      ...acc,
      [String(cur).charAt(0)]: [cur],
    };
  }, {});
}

function maxNumForEachStartNum(obj) {
  if (Object.keys(obj).length === 1 && Object.keys(obj)[0] === "0")
    obj["0"] = "0";
  for (let key in obj) {
    if (obj[key].length === 1) obj[key] = obj[key][0];
    else {
      if (key === "0") {
        let zeros = "";
        for (let i = 0; i < obj[key].length; i++) {
          zeros += "0";
        }
        obj[key] = zeros;
      } else {
        const sorted = obj[key].sort(
          // 정렬
          (a, b) =>
            Number(String(b) + String(a)) - Number(String(a) + String(b))
        );
        obj[key] = sorted.join("");
      }
    }
  }
  return obj;
}

function solution(numbers) {
  let answer = "";
  const convertedToObj = groupWithSameStartNum(numbers); // 앞자리 숫자 기준으로 객체로 변환  예시 { '3': [ 3, 30, 34 ], '5': 5, '9': 9 }
  const maxNums = maxNumForEachStartNum(convertedToObj); // 부분 집합 순열로 연산수를 줄여서 가장 큰 수를 찾는다.  { '3': 34330, '5': 5, '9': 9 }
  let keys = Object.keys(maxNums).reverse(); // 역순으로 가장 큰 숫자들 붙여주기    9  5   34330
  keys.forEach((key) => {
    answer += maxNums[key];
  });
  return String(answer);
}

console.log(solution([9, 998, 0, 0]));
console.log(solution([0, 0, 0, 0, 0]));
console.log(solution([0, 0, 1, 0, 0]));
console.log(solution([40, 403]));
console.log(solution([0, 0, 70]));
console.log(solution([1, 11, 111, 1111]));
console.log(solution([10, 0, 0, 2, 101]));
console.log(solution([21, 212]));
console.log(solution([12, 121]));
console.log(solution([3, 32]));
console.log(solution([3, 33]));
console.log(solution([3, 34]));
console.log(solution([40, 403]));
console.log(solution([40, 405]));
console.log(solution([40, 404]));
console.log(solution([12, 121]));
console.log(solution([2, 22, 223]));
console.log(solution([21, 212]));
console.log(solution([41, 415]));
console.log(solution([2, 22]));
console.log(solution([70, 0, 0, 0]));
console.log(solution([0, 0, 0, 0]));
console.log(solution([0, 0, 0, 1000]));
console.log(solution([12, 1213]));
console.log(solution([2, 20, 200]));
