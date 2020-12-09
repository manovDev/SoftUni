function solve(input) {
    let w = Number(input.shift());
    let l = Number(input.shift());
    let h = Number(input.shift());

    let apartmentSpace = w * l * h;
    let command = input.shift();

    while (command !== "Done") {
        let boxes = Number(command);
        apartmentSpace -= boxes
        if (apartmentSpace <= 0) {
            break;
        }
        command = input.shift();
    }
    if (command === "Done") {
        console.log(`${apartmentSpace} Cubic meters left.`);
    }else {
        console.log(`No more free space! You need ${Math.abs(apartmentSpace)} Cubic meters more.`);
    }
}
solve([10,
    1,
    2,
    4,
    6,
    "Done"]);