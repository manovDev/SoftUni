function solve(input) {
    let month = input.shift();
    let nights = Number(input.shift());
    let studio = 0;
    let apartment = 0;
    let res = '';

    if (month === "May" || month === "October") {
        studio = nights * 50;
        apartment = nights * 65;
        res = `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`;
        if (nights > 7 && nights < 14) {
            studio = studio - studio * 0.05;
            res = `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`;
        } else if (nights >= 14) {
            studio = studio - studio * 0.30;
            apartment = apartment - apartment * 0.10;
            res = `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`;
        }
    } else if (month === "June" || month === "September") {
        studio = nights * 75.20;
        apartment = nights * 68.70;
        res = `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`;
        if (nights > 14) {
            studio = studio - studio * 0.20;
            apartment = apartment - apartment * 0.10;
            res = `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`;
        }
    } else if (month === "July" || month === "August") {
        studio = nights * 76;
        apartment = nights * 77;
        res = `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`;
        if (nights > 14) {
            apartment = apartment - apartment * 0.10;
            res = `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`;
        }
    }
    console.log(res);
}
solve(["June", 14]);