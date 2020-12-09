function areaAndPeremeterOfCircle(input) {
    let r = Number(input.shift());
    let area = Math.PI * r * r;
    let p = 2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(p.toFixed(2));
}
areaAndPeremeterOfCircle(["3"]);