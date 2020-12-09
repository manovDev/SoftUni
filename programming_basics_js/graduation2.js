function solve(input) {
    let name = input.shift();
    let avarageGrade = 0;
    let classes = 1;
    let res = '';
    while (classes <= 12) {
        let grade = Number(input.shift());
        if (grade >= 4.00) {
            avarageGrade += grade;
            classes++;
            res = `${name} graduated. Average grade: ${(avarageGrade / 12).toFixed(2)}`;
        }else {
            res = `${name} has been excluded at ${classes} grade`;
            break;
        }
    }
    console.log(res);
}
solve(["Mimi",
    5,
    6,
    5,
    6,
    5,
    6,
    6,
    2,
    3]);