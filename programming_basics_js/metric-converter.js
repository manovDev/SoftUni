function metricConverter(input) {
    let num = Number(input.shift());
    let inpMet = input.shift();
    let outMet = input.shift();

    if (inpMet === "m") {
        if (outMet === "mm") {
            num = num * 1000;
        }else if (outMet === "cm") {
            num = num * 100;
        }
    }else if (inpMet === "cm") {
        if (outMet === "m") {
            num = num / 100;
        }else if (outMet === "mm") {
            num = num * 10;
        }
    }else if (inpMet === "mm") {
        if (outMet === "m") {
            num = num / 1000;
        }else if (outMet === "cm") {
            num = num / 10;
        }
    }
    console.log(num.toFixed(3));
}
metricConverter([1,"m","cm"]);