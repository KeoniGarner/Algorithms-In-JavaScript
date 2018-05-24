var HOUR = 8;
var MINUTE = 43;
var PERIOD = "AM";
var printString = "It's ";
if (MINUTE === 15 || MINUTE === 45){
    printString += "quarter ";
} else if (MINUTE === 30){
    printString += "half past ";
} else if (MINUTE < 30){
    printString += MINUTE + " ";
} else if (MINUTE > 30){
    printString += (60 - MINUTE) + " ";
}

if (MINUTE < 30) {
    printString += "after " + HOUR;
} else if (MINUTE > 30) {
    printString += "'til " + (HOUR + 1);
}

if (PERIOD === "AM"){
    printString += " in the morning.";
}else {
    printString += " in the evening.";
}
console.log(printString);