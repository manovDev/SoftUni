function inchesToCentemeters(input) {
    let inches = Number(input.shift());
    let convertToCentemeters = inches * 2.54;
    console.log(convertToCentemeters.toFixed(2));
}
inchesToCentemeters(["5"]);