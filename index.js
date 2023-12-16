function calculator(num1,num2,args){
    if(args == "add"){
        return add(num1, num2);
    }
    else if(args == "subtract"){
        return subtract(num1, num2);
    }
    else if(args == "divide"){
        return divide(num1, num2);
    }
    else if(args == "multiply"){
        return multiply(num1, num2);
    }
    else {
        return "wrong operational sign";
    }
}

function operatorSelector(operator){
   
    if(operator === "+" || operator === "add" || operator === "addition"){
        return  "add";
    }
    else if(operator === "-" || operator === "subtract" || operator === "subtraction"){
        return "subtract";
    }
    else if(operator === "*" || operator === "multiply" || operator === "multiplication"){
        return "multiply";
    }
    else if(operator === "/" || operator === "divide" || operator === "division"){
        return "divide";
    }
    else{
        return alert("unknown operator, try all over again.")
    }
}


function add(num1, num2){
    return (num1 + num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}





var num1 = parseInt(prompt("Enter first number:", "0"), 10);
var num2 = parseInt(prompt("Enter second number:","0"), 10);
var sign = prompt("Enter operator: ");
var optr = operatorSelector(sign);
console.log(num1);
console.log(num2);
console.log(optr); 

//var result = calculator(num1, num2, optr);


document.querySelector("#num1").innerHTML ="First number is: " + num1;
document.querySelector("#num2").innerHTML ="Second number is: " + num2;
document.querySelector("#operator").innerHTML = "Operation: " + optr;
document.querySelector("#answer").innerHTML = "Final Result: " + calculator(num1, num2, optr);
;



