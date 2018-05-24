function fancyArray(arr, symbol = "->", reversed = false){
    if (reversed){
        for (let i = arr.length - 1; i >= 0; i--){
            console.log(i, symbol, arr[i]);
        }
    } else {
        for (let i = 0; i < arr.length; i++){
            console.log(i, symbol, arr[i]);
        }
    }
}

fancyArray(["James","Jill", "Jack", "Jane"]);
fancyArray(["James","Jill", "Jack", "Jane"], "=>");
fancyArray(["James","Jill", "Jack", "Jane"], "=>", true);