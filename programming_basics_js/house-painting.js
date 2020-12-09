function housePainting(input) {
    let x = +input.shift();
    let y = +input.shift();
    let h = +input.shift();

    //walls
    let window = 1.5 * 1.5;
    let entrance = 1.2;
    let totalSidesArea = 2 * (x * y) + 2 * (x * x) - (window * 2) - (2 * entrance);
    let greenPaint = totalSidesArea / 3.4;

    //roof
    let roofSides = 2 * (x * y);
    let roofTriangles = 2 * (x * h / 2);
    let totalRoofArea = roofSides + roofTriangles;
    let redPaint = totalRoofArea / 4.3;
    
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}
housePainting([6, 10, 5.2]);