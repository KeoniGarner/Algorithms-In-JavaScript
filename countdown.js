function countdown(mult, lowNum, highNum, except){
    var num = highNum;
    while (num > lowNum){
        while (num % mult !== 0){
            num--;
        }
        if (num !== except){
            console.log(num);
        }
    }
}

countdown(3,5,17,9);