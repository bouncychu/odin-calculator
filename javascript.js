//javascript for odin project calculator

//Functions for add, subtract, multiply and divide
let add = (numberA, numberB) => numberA + numberB;
let subtract = (numberA, numberB) => numberA - numberB;
let multiply = (numberA, numberB) => numberA * numberB;
let divide = (numberA, numberB) => numberA / numberB;

//Function will perform calculated based on selected operator
let operate = (numberA, operator, numberB) => {
    if (operator == add) {
        return add(numberA, numberB);
    }
    else if (operator == subtract) {
        return subtract(numberA, numberB);
    }
    else if (operator == multiply) {
        return multiply(numberA, numberB);
    }
    else if (operator == divide) {
        return divide (numberA, numberB);
    }
}

/* Create the functions that populate the display when you click the number buttons. 
You should be storing the ‘display value’ in a variable somewhere for use in the next step*/

// Initialisation of variables that will be used to hold data and update data
let screenDisplay = document.querySelector(".screen"); 
let displayNumber = 'NA';
let firstInputNumber = 'NA';
let secondInputNumber;
let calculationResultNumber = 'NA';
let firstCalculationDone = false;
let selectedOperator = 'NA';
let operatorClickCount = 0;
let decimalClick = 0;

//Set up switch board for buttons on calculator
document.addEventListener("click", function(event) {
    // check which button  was clicked using the event.target.id property
    switch (event.target.id) {
        case "percent":
            if (Number(screenDisplay.textContent) == NaN) {
                break;
            }
            else {
                displayNumber = Number(screenDisplay.textContent/100);
                screenDisplay.textContent = Math.round(displayNumber * 100000000) / 100000000;
                screenDisplay.textContent = displayNumber;
            }
            break;
        case "back":
        if (calculationResultNumber !== 'NA' && displayNumber === 'NA') {
            displayNumber = screenDisplay.textContent;
            displayNumber = displayNumber.toString();
            displayNumber = displayNumber.slice(0, -1);
            screenDisplay.textContent = displayNumber;
            break;        
        }
        if (displayNumber == 'NA') {
            break;
        }
        else {
            displayNumber = displayNumber.toString();
            displayNumber = displayNumber.slice(0, -1);
            screenDisplay.textContent = displayNumber;
        }
        break;
        case "dot":
            decimalClick++;
        if (displayNumber === 'NA') {
            displayNumber = "0.";
            screenDisplay.textContent = displayNumber;
            break;
        }
        else if (decimalClick > 1) {
            break;
        }
        else if (includesDecimal(displayNumber) == true) {
            break;
        }
        else {
            displayNumber = displayNumber + ".";
            screenDisplay.textContent = displayNumber;
        }
        break;
        //AC button to clear all variables
        case "clear":
            operatorClickCount = 0;
            displayNumber = 'NA';
            firstInputNumber = 'NA';
            secondInputNumber = 'NA';
            calculationResultNumber = 'NA';
            screenDisplay.textContent= '';
            decimalClick = 0;
        break;
        // clicking numbers 0 to 1 will update display number on screen and save as variabl displayNumber
        case "one":
            if (displayNumber === 'NA') {
                displayNumber = 1;
                screenDisplay.textContent = displayNumber;
            }
            else {
                displayNumber = Number(displayNumber + "1");
                screenDisplay.textContent = displayNumber;
                
            }
            break;
        case "two":
            if (displayNumber === 'NA') {
                displayNumber = 2;
                screenDisplay.textContent = displayNumber;
                
            }
            else {
                displayNumber = Number(displayNumber + "2");
                screenDisplay.textContent = displayNumber;
                
            }
            break;
        case "three":
            if (displayNumber === 'NA') {
                displayNumber = 3;
                screenDisplay.textContent = displayNumber;
                
            }
            else {
                displayNumber = Number(displayNumber + "3");
                screenDisplay.textContent = displayNumber;
                
            }
            break;
        case "four":
            if (displayNumber === 'NA') {
                displayNumber = 4;
                screenDisplay.textContent = displayNumber;
                
            }
            else {
                displayNumber = Number(displayNumber + "4");
                screenDisplay.textContent = displayNumber;
                
            }
            break;
        case "five":
            if (displayNumber === 'NA') {
                displayNumber = 5;
                screenDisplay.textContent = displayNumber;
            }
            else {
                displayNumber = Number(displayNumber + "5");
                screenDisplay.textContent = displayNumber;
            }
            break;
        case "six":
            if (displayNumber === 'NA') {
                displayNumber = 6;
                screenDisplay.textContent = displayNumber;
            }
            else {
                displayNumber = Number(displayNumber + "6");
                screenDisplay.textContent = displayNumber;
            }
            break;
        case "seven":
            if (displayNumber === 'NA') {
                displayNumber = 7;
                screenDisplay.textContent = displayNumber;
            }
            else {
                displayNumber = displayNumber + "7";
                screenDisplay.textContent = displayNumber;
            }
            break;
        case "eight":
            if (displayNumber === 'NA') {
                displayNumber = 8;
                screenDisplay.textContent = displayNumber;
            }
            else {
                displayNumber = Number(displayNumber + "8");
                screenDisplay.textContent = displayNumber;
            }
            break;
        case "nine":
            if (displayNumber === 'NA') {
                displayNumber = 9;
                screenDisplay.textContent = displayNumber;
            }
            else {
                displayNumber = Number(displayNumber + "9");
                screenDisplay.textContent = displayNumber;
            }
            break;
        case "zero":
            if (displayNumber === 'NA') {
                displayNumber = 0;
                screenDisplay.textContent = displayNumber;
            }
            else {
                displayNumber = displayNumber + "0";
                screenDisplay.textContent = displayNumber;
            }
            break;
        /* Clicking Operators will select operator, save display Number as first input number if
        not intialised yet. If operator button is clicked in lieu of equals, it will make a calculation*/
        case "plus":
            if (displayNumber == 'NA' && firstInputNumber == 'NA') {break}
            decimalClick = 0;
            operatorClickCount++
            if (operatorClickCount == 1) {firstInputNumber = Number(screenDisplay.textContent)}
            else if (operatorClickCount > 1){
                calculateByOperator();
                selectedOperator = add;
                break;
            }
            selectedOperator = add;
            screenDisplay.textContent = "+";
            displayNumber = 'NA';
            break;
        case "minus":
            if (displayNumber == 'NA' && firstInputNumber == 'NA') {break}
            decimalClick = 0;
            operatorClickCount++
            if (operatorClickCount == 1) {firstInputNumber = Number(screenDisplay.textContent)}
            else if (operatorClickCount > 1){
                calculateByOperator();
                selectedOperator = subtract;
                break;
            }
            selectedOperator = subtract;
            screenDisplay.textContent = "-";
            displayNumber = 'NA';
            break;
        case "times":
            if (displayNumber == 'NA' && firstInputNumber == 'NA') {break}
            decimalClick = 0;
            operatorClickCount++
            if (operatorClickCount == 1) {firstInputNumber = Number(screenDisplay.textContent)}
            else if (operatorClickCount > 1){
                calculateByOperator();
                selectedOperator = multiply;
                break;
            }
            selectedOperator = multiply;
            screenDisplay.textContent = "*";
            displayNumber = 'NA';
            break;
        case "divide":
            if (displayNumber == 'NA' && firstInputNumber == 'NA') {break}
            decimalClick = 0;
            operatorClickCount++
            if (operatorClickCount == 1) {firstInputNumber = Number(screenDisplay.textContent)}
            else if (operatorClickCount > 1){
                calculateByOperator();
                selectedOperator = divide;
                break;
            }
            selectedOperator = divide;
            screenDisplay.textContent = "/";
            displayNumber = 'NA';
            break;
        case "equals":
            decimalClick = 0;
            calculate();
            break;
      default:
        // do nothing if none of the links were clicked
        break;
    }
  });

// calculate function will take in 2 numbers and an operator and complete a calculation.
// it will re-set the operatorClickCount to 0
let calculate = function() {
    if (firstInputNumber == 0 && displayNumber == 0 && selectedOperator == divide) {
        screenDisplay.textContent = "ERROR!!";
        operatorClickCount = 0;
        displayNumber = 'NA';
        firstInputNumber = 'NA';
        secondInputNumber = 'NA';
        calculationResultNumber = 'NA';
        decimalClick = 0;
        selectedOperator = 'NA';
        return false;
    }
    else if (firstInputNumber == 'NA' || displayNumber == 'NA') {
        screenDisplay.textContent = "ERROR!!";
        operatorClickCount = 0;
        displayNumber = 'NA';
        firstInputNumber = 'NA';
        secondInputNumber = 'NA';
        calculationResultNumber = 'NA';
        selectedOperator = 'NA';
        decimalClick = 0;
        return false;
    }
    secondInputNumber = Number(displayNumber);
    screenDisplay.textContent = operate(firstInputNumber, selectedOperator, secondInputNumber);
    screenDisplay.textContent = Math.round(screenDisplay.textContent * 100000000) / 100000000;
    calculationResultNumber = operate(firstInputNumber, selectedOperator, secondInputNumber);
    firstInputNumber = calculationResultNumber;
    console.log("first: ", firstInputNumber, "second: ", secondInputNumber, "display: ", displayNumber);
    displayNumber = 'NA';
    operatorClickCount = 0;
}

// unlike the calculate function, this will not re-set the operatorClickCount
// this allows for button inputs such as 12 + 7 - 5 * 3 = 42
let calculateByOperator = function() {
    if (firstInputNumber == 0 && displayNumber == 0 && selectedOperator == divide) {
        screenDisplay.textContent = "ERROR!!";
        operatorClickCount = 0;
        displayNumber = 'NA';
        firstInputNumber = 'NA';
        secondInputNumber = 'NA';
        calculationResultNumber = 'NA';
        decimalClick = 0;
        selectedOperator = 'NA';
        return false;
    }
    else if (firstInputNumber == 'NA' || displayNumber == 'NA') {
        screenDisplay.textContent = "ERROR!!";
        operatorClickCount = 0;
        displayNumber = 'NA';
        firstInputNumber = 'NA';
        secondInputNumber = 'NA';
        calculationResultNumber = 'NA';
        decimalClick = 0;
        selectedOperator = 'NA';
        return false;
    }
    secondInputNumber = Number(displayNumber);
    console.log("first: ", firstInputNumber, "second: ", secondInputNumber, "display: ", displayNumber);
    screenDisplay.textContent = operate(firstInputNumber, selectedOperator, secondInputNumber);
    screenDisplay.textContent = Math.round(screenDisplay.textContent * 100000000) / 100000000;
    calculationResultNumber = operate(firstInputNumber, selectedOperator, secondInputNumber);
    firstInputNumber = calculationResultNumber;
    displayNumber = 'NA';
}

// Determines whether number has a decimal, used in decimal button to prevent 2 decimals in one number
function includesDecimal(n)
{
   var result = (n - Math.floor(n)) !== 0; 
   
  if (result)
    return true;
   else
     return false;
  }

//Listens on document for keystrokes and clicks corresponding buttons on webpage
document.onkeydown = function(event) {
        if (event.key == 0) {
            document.getElementById("zero").click();
        }
        else if (event.key == 1) {
            document.getElementById("one").click();
        }
        else if (event.key == 2) {
            document.getElementById("two").click();
        }
        else if (event.key == 3) {
            document.getElementById("three").click();
        }
        else if (event.key == 4) {
            document.getElementById("four").click();
        }
        else if (event.key == 5) {
            document.getElementById("five").click();
        }
        else if (event.key == 6) {
            document.getElementById("six").click();
        }
        else if (event.key == 7) {
            document.getElementById("seven").click();
        }
        else if (event.key == 8) {
            document.getElementById("eight").click();
        }
        else if (event.key == 9) {
            document.getElementById("nine").click();
        }
        else if (event.key == "/") {
            document.getElementById("divide").click();
        }
        else if (event.key == ".") {
            document.getElementById("dot").click();
        }
        else if (event.key == "*") {
            document.getElementById("times").click();
        }
        else if (event.key == "+") {
            document.getElementById("plus").click();
        }
        else if (event.key == "-") {
            document.getElementById("minus").click();
        }
        else if (event.key == "Backspace") {
            console.log("backspace");
            document.querySelector("#back").click();
        }
        else if (event.key == "Enter") {
            console.log("enter");
            document.querySelector("#equals").click();
        }
        else if (event.key == "%") {
            document.querySelector("#percent").click();
        }
    };
