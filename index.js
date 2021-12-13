let userInput = prompt("Do you want to see balance, widthdraw, or deposit")
let balance = 100;

function widthdraw(totalMoney, removeMoney){
    totalMoney = totalMoney - removeMoney
    console.log(totalMoney)
    return totalMoney
}

function mainMenu(action){
 switch(action){
     case "balance":
         balance = prompt('check balance')
         console.log(balance)
         break;
     case "withdraw":
             let withdrawMoney = prompt('how would you like to withdraw');
             balance = withdraw(balance,withdrawMoney)
             console.log(balance)
             break;
     case deposit:
          deposit = prompt('Would you like to make a deposit')
          console.log(deposit)
          break;

     default:
         console.log("exit")
         break;


    }
}

mainMenu(userInput)