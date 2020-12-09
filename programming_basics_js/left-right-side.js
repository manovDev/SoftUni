function solve(input) {
    let n = Number(input.shift());
    let leftSide = 0;
    let rightSide = 0;
    for(let i = 0; i < n * 2; i++) {
        let num = Number(input.shift());
        if (i < n) {
            leftSide += num;
        }else {
            rightSide += num;
        }

    }
    if (leftSide === rightSide) {
        console.log(`Yes, sum = ${leftSide}`);
    }else {
        console.log(`No, diff = ${Math.abs(leftSide - rightSide)}`);
    }
}
solve([2,10,20,10,10]);