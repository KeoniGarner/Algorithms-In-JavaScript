function longWay() {
    var sum = 0;
    for (var count = -300000; count < 300000; count++) {
        if (count % 2 !== 0) {
            sum += count;
        }
    }
    console.log(sum);
}

longWay();

function shortCut(){
    console.log(0);
}

shortCut();