function solve(input) {
    let name = [];
    let points = [];
    let cnt = 0;
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        for (let g = i + 1; g < input.length; g++) {

            if (isNaN(input[i])) {
                if (isNaN(input[g])) {
                    break;
                }else {
                    if (input[i][cnt].charCodeAt() === +input[g]) {
                        total += 10;
                    }else {
                        total += 2;
                    }
                }
            }else {
                break;
            }
            cnt++
        }
        if (total !== 0) {
            points.push(total);
        }
        if (input[i] !== 'Stop' && isNaN(input[i])) {
            name.push(input[i]);
        }
        total = 0;
        cnt = 0;
    }
    let pnt = Math.max(...points);
    let n = name[points.lastIndexOf(pnt)];
    console.log(`The winner is ${n} with ${pnt} points!`);
}
solve(['Ivan', '73', '20', '98', '110', 'Ivo', '80', '65', '87', 'Stop']);
// solve([ 'Pesho',
// '124',
// '34',
// '111',
// '97',
// '99',
// 'Gosho',
// '98',
// '124',
// '88',
// '76',
// '18',
// 'Stop' ]);