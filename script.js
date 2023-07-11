let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let decimal = document.querySelector("#decimal");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

var displayNum = 0;
var mathOperator = null;
var firstNum = 0;


zero.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 0;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

one.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 1;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

two.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 2;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

three.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 3;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

four.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 4;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

five.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 5;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

six.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 6;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

seven.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 7;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

eight.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 8;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});

nine.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 9;

    displayNum = (displayNum * 10) + result;
    output.innerText = displayNum;
});


clear.addEventListener("click", function () {
    let output = document.querySelector("#output");
    displayNum = 0;
    mathOperator = null;
    firstNum = 0;
    output.innerText = displayNum;
});


add.addEventListener("click", function () {
    equals();
    mathOperator = "+";
    firstNum = displayNum;
    displayNum = 0;
});

subtract.addEventListener("click", function () {
    equals();
    mathOperator = "-";
    firstNum = displayNum;
    displayNum = 0;
});

divide.addEventListener("click", function () {
    equals();
    mathOperator = "/";
    firstNum = displayNum;
    displayNum = 0;
});

multiply.addEventListener("click", function () {
    equals();
    mathOperator = "*";
    firstNum = displayNum;
    displayNum = 0;
});

equal.addEventListener("click", function () {
    equals();
});

function equals() {

    if (mathOperator != null) {

        if (mathOperator == "+") {
            displayNum += firstNum;
            output.innerText = displayNum;
        }
        else if (mathOperator == "-") {
            displayNum = firstNum - displayNum;
            output.innerText = displayNum;
        }
        else if (mathOperator == "/") {
            if (displayNum == 0) {
                output.innerText = "error";
                return;
            }
            displayNum = firstNum / displayNum;
            output.innerText = displayNum;
        }
        else if (mathOperator == "*") {
            displayNum *= firstNum;
            output.innerText = displayNum;
        }
    }
    mathOperator = null;
}
// function to use the same code for it all, dont reuse code

