function solve(input) {
    let type = input.shift();
    let r = Number(input.shift());
    let c = Number(input.shift());
    let res = '';
    
    if (type === 'Premiere') {
        res = (r * c) * 12.00;
    }else if (type === 'Normal') {
        res = (r * c) * 7.50;
    }else if (type === 'Discount') {
        res = (r * c) * 5.00;
    }

    console.log(`${res.toFixed(2)} leva`);
}
solve(['Premiere',10,12]);