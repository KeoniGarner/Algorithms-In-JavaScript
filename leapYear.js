function isLeapYear(year){
    if (year % 100 === 0 && year % 400 !== 0){
        return false;
    } else if (year % 4 === 0){
        return true;
    }
    return false;
}

console.log(isLeapYear(100));
console.log(isLeapYear(400));
console.log(isLeapYear(2048));