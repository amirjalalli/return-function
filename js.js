var firstNum = Number(prompt("enter your first num..."));
var secondNum = Number(prompt("enter your second num..."));

function sum(num1 = 1 ,num2 = 2){ 
    return num1 ** num2;
}

var powerMyMind = sum(firstNum,secondNum);
alert(powerMyMind);