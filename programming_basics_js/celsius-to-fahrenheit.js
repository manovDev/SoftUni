function celsiusToFahrenheit(input) {
    let celsius = +input.shift();
    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit(["32.3"]);