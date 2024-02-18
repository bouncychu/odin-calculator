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
let selectedOperator;
let operatorClickCount = 0;

document.addEventListener("click", function(event) {
    // check which button  was clicked using the event.target.id property
    switch (event.target.id) {
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
        if (displayNumber === 'NA' && firstInputNumber == 'NA') {
            displayNumber = ".";
            screenDisplay.textContent = displayNumber;
        }
        else if (firstInputNumber !== "NA" && includesDecimal(displayNumber) == false) {
            displayNumber = firstInputNumber + ".";
            screenDisplay.textContent = displayNumber;
            break;
        }
        else if (firstInputNumber !== "NA" && includesDecimal(firstInputNumber) == false) {
            displayNumber = firstInputNumber + ".";
            screenDisplay.textContent = displayNumber;
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
                displayNumber = Number(displayNumber + "0");
                screenDisplay.textContent = displayNumber;
            }
            break;
        /* Clicking Operators will select operator, save display Number as first input number if
        not intialised yet. If operator button is clicked in lieu of equals, it will make a calculation*/
        case "plus":
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
    secondInputNumber = Number(displayNumber);
    screenDisplay.textContent = operate(firstInputNumber, selectedOperator, secondInputNumber);
    calculationResultNumber = operate(firstInputNumber, selectedOperator, secondInputNumber);
    firstInputNumber = calculationResultNumber;
    console.log("first: ", firstInputNumber, "second: ", secondInputNumber, "display: ", displayNumber);
    displayNumber = 'NA';
    operatorClickCount = 0;
}

// unlike the calculate function, this will not re-set the operatorClickCount
// this allows for button inputs such as 12 + 7 - 5 * 3 = 42
let calculateByOperator = function() {
    secondInputNumber = Number(displayNumber);
    console.log("first: ", firstInputNumber, "second: ", secondInputNumber, "display: ", displayNumber);
    screenDisplay.textContent = operate(firstInputNumber, selectedOperator, secondInputNumber);
    calculationResultNumber = operate(firstInputNumber, selectedOperator, secondInputNumber);
    firstInputNumber = calculationResultNumber;
    displayNumber = 'NA';
}

function includesDecimal(n)
{
   var result = (n - Math.floor(n)) !== 0; 
   
  if (result)
    return true;
   else
     return false;
  }