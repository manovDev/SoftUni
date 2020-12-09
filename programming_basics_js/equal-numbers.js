function equalNumbers(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    if (a === b && b === c) {
        console.log("yes");
    }else {
        console.log("no");
    }
}
equalNumbers([5,3,5]);