function solve(input) {
    let guestIzpulnitelq = Number(input.shift());
    let command = 0;
    let kuvert = 0;
    let totalGuests = 0;
    let total = 0;
    let moneyLeft = 0;
    while(command !== "The restaurant is full") {
        command = input.shift();
        if (command < 5) {
            kuvert = command * 100;
        }else {
            kuvert = command * 70;
        }
        totalGuests += command;
        total = total + kuvert;
        if (command === "The restaurant is full"){
            break;
        }
    }
    moneyLeft = total - guestIzpulnitelq;
    if (moneyLeft >= 0) {
        console.log(`You have ${totalGuests} guests and ${moneyLeft} leva left.`);
    }else {
        console.log(`You have ${totalGuests} guests and ${total} leva income, but no singer.`);
    }
}
solve([2800,5,5,4,6,6,12,12,"The restaurant is full"]);