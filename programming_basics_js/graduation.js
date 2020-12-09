function solve(input) {
    let name = input.shift();
    let avarageGrade = 0;
    let classes = 0;
    while (classes < 12) {
        let grade = Number(input.shift());
        if (grade >= 4.00) {
            avarageGrade += grade;
            classes++;
        }
    }
    console.log(`${name} graduated. Average grade: ${(avarageGrade / 12).toFixed(2)}`);
}
solve([]);