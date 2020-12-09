function solve(input) {
    let yearlyTax = Number(input.shift());
    let shoes = yearlyTax - yearlyTax * 0.40;
    let equip = shoes - shoes * 0.2;
    let ballPrise = equip / 4;
    let backetballAcseccoaries = ballPrise / 5;
    let total = yearlyTax + shoes + equip + ballPrise + backetballAcseccoaries;
    console.log(total.toFixed(2));
}
solve([320]);