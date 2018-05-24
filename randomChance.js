function slotMachine(coins, endCoins = 0){
    while (coins > 0){
        if (Math.floor(Math.random() * 101) === 1){
            var reward = Math.floor(Math.random() * (100 - 50 + 1) + 50);
            console.log("CONGRATULATIONS! YOU WON:", reward, "COINS!!!");
            coins += reward;
            if(coins > endCoins){
                break;
            }
        }
        coins--;
    }
    return coins;
}

console.log(slotMachine(100, 200));
