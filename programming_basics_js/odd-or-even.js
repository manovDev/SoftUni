function oddOrEven(input) {
    let num = Number(input.shift());
    if (num % 2 === 0) {
        console.log("Even");
    }else {
        console.log("Odd");
    }
}
oddOrEven([4]);