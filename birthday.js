function yourBirthday(month, day){
    var correctMonth = 2;
    var correctDay = 19;
    if((correctMonth === month && correctDay === day) || (correctMonth === day && correctDay === month)){
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}

yourBirthday(2,19);
yourBirthday(19,2);
yourBirthday(1,20);