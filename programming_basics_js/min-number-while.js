function solve(input) {
    let n = Number(input.shift());
    let counter = 0;
    let a = Number.MAX_SAFE_INTEGER;

    while(counter < n) {
       let num = Number(input.shift());
        if (num < a) {
            a = num;
        }
        counter++;
    }
    console.log(a);
}
solve([5,-1000,-2000,-3000,-4000,-5000]);