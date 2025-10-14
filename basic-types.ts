// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string = "Welcome!";
// Cannot assign to 'welcomeMssg' because it is a constant.
// welcomeMssg = 'Welcome, Peter!'

// string
let message: string = "Hello, Peter!";

//returns string lenght
let messageLenght: number = message.length;

// string interpolation
let welcomeMessageDetails: string = `Text message lenght is ${messageLenght}`;
console.log(welcomeMessageDetails);

// number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let subtraction: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let devide: number = numOne / numTwo;

// boolean (true/false) === - srqvnqva po Value (stoinost) i type; == sravnqva samo Value(stoinost)
let areEqual: boolean = numOne == numTwo;
let isGrater: boolean = numOne > numTwo;
let isGraterOrEqual: boolean = numOne >= numTwo;

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 5;

// Conditions

// ternary operator - ima sintaxis pravi logical proverka//trqbva da se dobavi ? i dvuetochie \\ "true result" : "false result"
let positiveNumComparison: string =
  numOne > 0
    ? `The number ${numOne} is positive`
    : `The number ${numOne}  is negative`;

// if/else statement

const numThree: number = 100;

if (numThree <= 10) {
  console.log("The number is less or equal ot 10");
} else if (numThree > 100) {
  console.log("The number is greater than 100");
} else if (numThree > 50) {
  console.log("The number is greater than 50");
} else {
  console.log("numOne is not greater than 3");
}
