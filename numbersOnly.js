function numbersOnly(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function removeNumbers(arr){
    for(var i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            arr.splice(i, 1);
            i--;
        }
    }
}

var newArray = [1, "apple", -3, "orange", 0.5]
newArray = numbersOnly(newArray);
console.log(newArray);


newArray = [12,42,"Jack",25, 253,25325,253, "Jill"];
removeNumbers(newArray);
console.log(newArray);
