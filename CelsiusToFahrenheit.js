function celsiusToFahrenheit(cDegrees){
    return (cDegrees * 9/5) + 32;
}

console.log(celsiusToFahrenheit(26));

var i = 200;
while (celsiusToFahrenheit(i) !== i){
    i--;
}
console.log(i);