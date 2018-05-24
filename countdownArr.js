function countdownArr(num){
    var arr = [];
    for (i = num; i >= 0; i--){
        arr.push(i);
    }
    return arr;
}

console.log(countdownArr(100));

// length is num + 1;