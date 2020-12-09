function solve(input) {
    let n = Number(input.shift());
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 1; i <= n; i++) {
        let num = Number(input.shift());
        if (i % 2 === 0) {
            evenSum += num;
        }else {
            oddSum += num;
        }
    }
    if (evenSum === oddSum) {
        console.log(`Yes\nSum = ${evenSum}`);
    }else {
        console.log(`No\nDiff = ${Math.abs(evenSum - oddSum)}`);
    }

}
solve([4,10,50,60,20]);