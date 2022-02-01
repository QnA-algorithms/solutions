function solution(numbers) {
  let num = numbers
    .map((el) => {
      return String(el);
    })
    .sort((a, b) => b + a - (a + b))
    .join("");
  if (num[0] === "0") {
    return "0";
  } else {
    num;
  }
  return num;
}
