let temperature = prompt("Veuillez saisir une température");
let unit = prompt("Veuillez saisir une unité (°C, °F, K)");

const UNIT = ["C", "F", "K"];

while(isNaN(temperature)){
    alert("Veuillez saisir valeur numérique de température !")
    temperature = prompt("Veuillez saisir une température")
}

while(UNIT.indexOf(unit) === -1 || unit === "K" && temperature < 0){
    alert("Veuillez saisir une unité acceptable (" + UNIT.join(" ou ") + ") !")
    unit = prompt("Veuillez saisir une unité (°C, °F, K)")
}

let tempC, tempF, tempK;
temperature = parseFloat(temperature);
switch (unit) {
    case "C":
        tempC = temperature;
        tempF = 9/5 * temperature + 32;
        tempK = temperature + 273.15;
        break;
    case "F":
        tempC = (temperature - 32) * 5/9;
        tempF = temperature;
        tempK = (temperature - 32) * 5/9 + 273.15;
        break;
    case "K":
        tempC = temperature - 273.15;
        tempF = (temperature - 273.15) * 9/5 + 32;
        tempK = temperature;
        break;
}
alert("Voici vos température :\n\t♦ " + tempC + "°C\n\t♦ " + tempF + "°F\n\t♦ " + tempK + "K");
