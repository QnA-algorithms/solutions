function solution(id_list, report, k) {
  const answer = {};
  const report_list = {};
  id_list.forEach((el) => {
    report_list[el] = [];
    answer[el] = 0;
  });

  const refinedReport = [...new Set(report)];

  refinedReport.forEach((el) => {
    const reported = el.split(" ");
    report_list[reported[1]].push(reported[0]);
  });

  for (let key in report_list) {
    if (report_list[key].length >= k)
      report_list[key].forEach((el) => {
        if (!answer[el]) answer[el] = 1;
        else answer[el]++;
      });
  }

  return Object.values(answer);
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
