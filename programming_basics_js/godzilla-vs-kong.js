function godzKing(input) {
    let budget = Number(input.shift());
    let statists = Number(input.shift());
    let clothePriceForOne = Number(input.shift());
    let dekor = budget * 0.10;
    let sumClothesPrice = statists * clothePriceForOne;

    
    if (statists >= 150) {

        sumClothesPrice = sumClothesPrice - sumClothesPrice * 0.10;

    }
    
    let finalPrice = dekor + sumClothesPrice;
    let moneyLeft = budget - finalPrice;
    if (budget >= finalPrice) {
        console.log(`Action!\nWingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money!\nWingard needs ${(Math.abs(moneyLeft)).toFixed(2)} leva more.`);
    }
}
godzKing([9587.88,222,55.68]);