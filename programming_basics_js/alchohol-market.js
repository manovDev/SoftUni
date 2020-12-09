function alchoholMarket(input) {
    let wiskeyPrice = Number(input.shift());
    let beerInLiters = Number(input.shift());
    let wineInLiters = Number(input.shift());
    let rakiaInLiters = Number(input.shift());
    let wiskeyInLiters = Number(input.shift());

    let rakiaPrice = wiskeyPrice / 2;
    let winePrice = rakiaPrice - (0.4 * rakiaPrice);
    let beerPrice = rakiaPrice - (0.8 * rakiaPrice);
    let sumForRakia = rakiaInLiters * rakiaPrice;
    let sumForWine = wineInLiters * winePrice;
    let sumForBeer = beerInLiters * beerPrice;
    let sumForWiskey = wiskeyInLiters * wiskeyPrice;
    let total = sumForRakia + sumForBeer + sumForWine + sumForWiskey;

    console.log(total.toFixed(2));

}
alchoholMarket(["50","10","3.5","6.5","1"]);