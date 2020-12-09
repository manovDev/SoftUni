function excellent(input) {
    let grade = Number(input.shift());
    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}
excellent(["6"]);