function solve(input) {
    let numBadGrates = Number(input.shift());
    let badGradesCnt = 0;
    let sumGrades = 0;
    let cnt = 0;
    let lastProblem = '';

    let title = input.shift();
    while (title !== "Enough") {
        let problemGrade = Number(input.shift());
        sumGrades += problemGrade;
        cnt++;
        lastProblem = title;
        if (problemGrade <= 4) {
            badGradesCnt++;
        }
        if (badGradesCnt === numBadGrates) {
            break;
        }
        title = input.shift();
    }
    if (title === "Enough") {
        let avgScore = sumGrades / cnt;
        console.log(`Average score: ${(avgScore).toFixed(2)}\nNumber of problems: ${cnt}\nLast problem: ${lastProblem}`);
    }else {
        console.log(`You need a break, ${badGradesCnt} poor grades.`);
    }
}
solve([3,
    "Money",
    6,
    "Story",
    4,
    "Spring Time",
    5,
    "Bus",
    6,
    "Enough"]);