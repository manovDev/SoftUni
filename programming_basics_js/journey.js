function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let total = 0;
    let res = '';
    switch (season) {
        case "summer":
            if (budget <= 100) {
                total = budget * 0.30;
                res = `Somewhere in Bulgaria \n Camp - ${total.toFixed(2)}`;
            } else if (budget <= 1000) {
                total = budget * 0.40;
                res = `Somewhere in Balkans \n Camp - ${total.toFixed(2)}`;
            }else {
                total = budget * 0.90;
                res = `Somewhere in Europe \n Hotel - ${total.toFixed(2)}`;
            }
            break;
        case "winter":
                if (budget <= 100) {
                    total = budget * 0.70;
                    res = `Somewhere in Bulgaria \n Hotel - ${total.toFixed(2)}`;
                } else if (budget <= 1000) {
                    total = budget * 0.80;
                    res = `Somewhere in Balkans \n Hotel - ${total.toFixed(2)}`;
                }else {
                    total = budget * 0.90;
                    res = `Somewhere in Europe \n Hotel - ${total.toFixed(2)}`;
                }
            break;
    }
    console.log(res);
}
solve([50, "summer"]);