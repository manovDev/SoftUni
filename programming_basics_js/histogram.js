function solve(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= n; i++) {
        let num = Number(input.shift());
        if (num < 200) {
            p1++;
        }
        if (num >= 200 && num < 400) {
            p2++;
        }
        if (num >= 400 && num < 600) {
            p3++;
        }
        if (num >= 600 && num < 800) {
            p4++;
        }
        if (num >= 800) {
            p5++;
        }
    }
    p1 = p1 / n * 100;
    p2 = p2 / n * 100;
    p3 = p3 / n * 100;
    p4 = p4 / n * 100;
    p5 = p5 / n * 100;
    console.log(`${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%\n${p4.toFixed(2)}%\n${p5.toFixed(2)}%`);
}
solve([ '9', '367', '99', '200', '799', '999', '333', '555', '111', '9' ]);