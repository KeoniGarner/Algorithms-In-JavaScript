function thisLengthThatValue(num1, num2){
    if (num1 === num2){
        console.log("Jinx!");
    }
    var arr = [];
    for (var i = 0; i < num1; i++){
        arr.push(num2);
    }
    return arr;
}

console.log(thisLengthThatValue(3,3));