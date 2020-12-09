function danceHall(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let a = Number(input.shift());
    
    let hallSize = (length * 100) * (width * 100);
    let warDrobeSize = (a * 100 * a * 100);
    let benchSize = hallSize / 10;
    let freeSpace = hallSize - warDrobeSize - benchSize;
    let dancers = freeSpace / (40 + 7000);
    console.log(Math.floor(dancers));
}
danceHall(["50","25","2"]);