var num1 = parseInt(prompt("First number: "));
var calc = prompt("Operator: ");
var num2 = parseInt(prompt("Second number: "));

let calculator = function() {
    if(calc == "+") {
        alert(num1 + num2)
    } else if(calc == "-") {
        alert(num1 - num2)
    } else if(calc == "*") {
        alert(num1 * num2)
    } else if(calc == "/") {
        alert(num1 / num2)
    }

}

calculator ()