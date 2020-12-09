function solve(input) {
    let x = Number(input.shift());
    let y = Number(input.shift());
    let z = Number(input.shift());
    let workers = Number(input.shift());
    let litersLeft = 0;
    let wineForWorkers = 0;
    let res = '';

    let totalGrape = x * y;
    let wine = (totalGrape * 0.40) / 2.5;
    if (wine >= z) {
        litersLeft = (wine - z);
        wineForWorkers = litersLeft / workers;
        res = `Good harvest this year! Total wine: ${Math.floor(wine)} liters.
        ${Math.ceil(litersLeft)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.
        `;
    }else {
        litersLeft = z - wine;
        res = `It will be a tough winter! More ${Math.floor(litersLeft)} liters wine needed.`;
    }
    console.log(res);
}
solve([1020,1.5,425,4]);