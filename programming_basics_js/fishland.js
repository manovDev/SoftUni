function fishland(input) {
    let skumriaPricePerKg = +input.shift();
    let cacaPricePerKg = +input.shift();
    let palamudKg = +input.shift();
    let safridKg = +input.shift();
    let midiKg = +input.shift();

    let palamudPricePerKg = skumriaPricePerKg + skumriaPricePerKg * 0.60;
    let palamudPrice = palamudKg * palamudPricePerKg;
    let safridPricePerKg = cacaPricePerKg + cacaPricePerKg * 0.80;
    let safridPrice = safridKg * safridPricePerKg;
    let midiPrice = midiKg * 7.50;

    let total = palamudPrice + safridPrice + midiPrice;
    console.log(total.toFixed(2));
}
fishland([5.55,
    3.57,
    4.3,
    3.6,
    7
    
    ]);