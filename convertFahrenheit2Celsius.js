//This program *converts* **fahrenheit** into **celsius**

function convertFahrenheit2Celsius(Fahrenheit){
    let Celsius = ((Fahrenheit-32)*5/9);
    return Celsius;
}

export {convertFahrenheit2Celsius}