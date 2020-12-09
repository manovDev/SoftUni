function charityCampaign(input) {
    let days = Number(input.shift());
    let sweets = Number(input.shift());
    let cakes = Number(input.shift());
    let gofretes = Number(input.shift());
    let pancakes = Number(input.shift());

    let sumPerCookerAdayCakes = cakes * 45;
    let sumPerCookerAdayGofretes = gofretes * 5.80;
    let sumPerCookerAdayPancakes = pancakes * 3.20;

    let sumPerDay = (sumPerCookerAdayCakes + sumPerCookerAdayGofretes + sumPerCookerAdayPancakes) * sweets;
    let sumCompany = sumPerDay * days;
    let sumAfterCosts = sumCompany - sumCompany / 8;

    console.log(sumAfterCosts.toFixed(2));
}
charityCampaign(["20","8","14","30","16"]);