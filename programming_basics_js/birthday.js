function birthday(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift() * 0.01);
    let v = length * width * height;
    let litresInAquarium = v * 0.001;
    let total = litresInAquarium * (1 - percent);
    console.log(total.toFixed(3));
}
birthday(["85", "75", "47", "17"]);