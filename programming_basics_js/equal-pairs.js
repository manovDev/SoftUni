function solve(input) {
    let n = Number(input.shift());
    let lastPair = 0;
    let currPair = 0;
    let diff = 0;
    let big = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= n * 2; i++) {
        lastPair = currPair;
        let num1 = Number(input.shift());
        ++i;
        let num2 = Number(input.shift());
        currPair = num1 + num2;
        if (i > 2) {
            if (lastPair !== currPair) {
                diff = Math.abs(lastPair - currPair);
            }
            if (diff > big) {
                big = diff;
            }
        }
    }
    if (diff === 0) {
        console.log(`Yes, value=${currPair}`);
    } else {
        console.log(`No, maxdiff=${diff}`);
    }
}
solve([1, 5, 5]);