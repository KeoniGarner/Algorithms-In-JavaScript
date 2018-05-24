function fitFirst(arr){
    if(arr[0] > arr.length){
        console.log("Too big!");
    } else if(arr[0] < arr.length){
        console.log("Too small!");
    } else if(arr[0] === arr.length){
        console.log("Just right!");
    }
}

fitFirst([0]);
fitFirst([1]);
fitFirst([2]);