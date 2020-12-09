function foodDelivery(num) {
    let chickenMenu = Number(num.shift() * 10.35);
    let fishMenu = Number(num.shift() * 12.40);
    let vegetarianMenu = Number(num.shift() * 8.15);
    let allMenuPrices = chickenMenu + fishMenu + vegetarianMenu;
    let dessert = 20 / 100 * allMenuPrices;
    let foodDelivery = Number(2.50);
    let total = Number(allMenuPrices + dessert + foodDelivery);
    console.log("Total: " + total.toFixed(2));
}
foodDelivery([2,4,3]);