function solve(input) {
    let type = input.shift();
    let cnt = Number(input.shift());
    let budget = Number(input.shift());
    let total = 0;
    let res = '';
    switch (type) {
        case "Roses":
            if (cnt > 80) {
                total = (cnt * 5);
                total = total - total * 0.10;
            } else {
                total = cnt * 5;
            }
            break;
        case "Dahlias":
            if (cnt > 90) {
                total = (cnt * 3.80);
                total = total - total * 0.15;
            } else {
                total = cnt * 3.80;
            }
            break;
        case "Tulips":
            if (cnt > 80) {
                total = (cnt * 2.80);
                total = total - total * 0.15;
            } else {
                total = cnt * 2.80;
            }
            break;
        case "Narcissus":
            if (cnt < 120) {
                total = (cnt * 3);
                total = total + total * 0.15;
            } else {
                total = cnt * 3;
            }
            break;
        case "Gladiolus":
            if (cnt < 80) {
                total = (cnt * 2.50);
                total = total + total * 0.20;
            } else {
                total = cnt * 2.50;
            }
            break;
    }
    if (budget >= total) {
        res = `Hey, you have a great garden with ${cnt} ${type} and ${(budget - total).toFixed(2)} leva left.`;
    }else {
        res = `Not enough money, you need ${(total - budget).toFixed(2)} leva more.`;
    }
    console.log(res);
}
solve(["Tulips",88,260]);