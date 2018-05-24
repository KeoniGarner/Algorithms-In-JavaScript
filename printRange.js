function printRange(start, end, skip){
    if (!end){
        end = start;
        start = 0;
    }
    if (!skip){
        skip = 1;
    }
    for (var count = start; count < end; count += skip){
        console.log(count);
    }
}

printRange(-2,10,3);
printRange(-2,10);
printRange(10);