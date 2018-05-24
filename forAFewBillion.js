var reward = 0.01;
var tenThousandMet = true;
var billionMet = true;
for (var count = 1; count < 1033; count++){
    if (reward >= 10000 && tenThousandMet){
        console.log("Days to reach $10,000:", count);
        tenThousandMet = false;
    }
    if (reward >= 1000000000 && billionMet){
        console.log("Days to reach $1,000,000,000:", count);
        billionMet = false;
    }
    if (count === 30){
        console.log("Value after 30 days: ", reward);       
    }
    if (reward === Infinity){
        console.log("Days to reach Infinity:", count);
        break;
    }
    reward = reward*2;
}