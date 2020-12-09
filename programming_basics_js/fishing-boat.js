function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let cnt = Number(input.shift());
    let total = 0;
    let res = '';

    switch (season) {
        case "Spring":
            total = 3000;
            if (cnt <= 6) {
                total = total - total * 0.10;
            } else if (cnt >= 7 && cnt <= 11) {
                total = total - total * 0.15;
            } else {
                total = total - total * 0.25;
            }
            if (cnt % 2 === 0) {
                total = total - total * 0.05;
            }
            break;
        case "Summer":
            total = 4200;
            if (cnt <= 6) {
                total = total - total * 0.10;
            } else if (cnt >= 7 && cnt <= 11) {
                total = total - total * 0.15;
            } else {
                total = total - total * 0.25;
            }
            if (cnt % 2 === 0) {
                total = total - total * 0.05;
            }
            break;
        case "Autumn":
            total = 4200;
            if (cnt <= 6) {
                total = total - total * 0.10;
            } else if (cnt >= 7 && cnt <= 11) {
                total = total - total * 0.15;
            } else {
                total = total - total * 0.25;
            }
            break;
        case "Winter":
            total = 2600;
            if (cnt <= 6) {
                total = total - total * 0.10;
            } else if (cnt >= 7 && cnt <= 11) {
                total = total - total * 0.15;
            } else {
                total = total - total * 0.25;
            }
            if (cnt % 2 === 0) {
                total = total - total * 0.05;
            }
            break;
    }
    if (budget >= total) {
        res = `Yes! You have ${(budget - total).toFixed(2)} leva left.`;
    }else {
        res = `Not enough money! You need ${(total - budget).toFixed(2)} leva.`;
    }
    console.log(res);
}
solve([3600, "Autumn", 6]);