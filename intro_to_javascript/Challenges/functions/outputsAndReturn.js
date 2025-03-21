/* 
In this function if we gave an input of $4 and each bottle of milk cost $1.5 then the robot will buy 2 bottles of milk which will cost $3 and it'll give us $1 change. And that $1 of change is the output from this function which we can bind to a variable called change.
*/

/*
Review the function:
We have the function keyword, we have a function name and then inside the curly braces we specify if we have an input that this function is going to use, and in order to get an output out of the function we have to use that keyword return, and whatever gets returned in the function becomes the right hand side of this function call.

So when we call a function that has an output we can use the output and we can assign it to a variable

*/

// Most Complex function || Strawberry flavor function


function getMilk(money, costPerBottle) {
  // var bottleCost = money / 1.5;

  // Math.floor(), to round numbers
  // var totalBottles = Math.floor(bottleCost);

  console.log("leave the house");
  console.log("move to right");
  console.log("go to shop");
  console.log("buy " + calBottles(money, costPerBottle) + " bottles of the milk");
  console.log("pay the amount");
  console.log("move back");
  console.log("come back home");
  console.log("move to left");
  console.log("put the milk in kitchen");

  // return money % 1.5 // Remainder
  return calChange(money, costPerBottle)
}

//  That remainder becomes the output of this function call
//  So we can save it inside a variable, so that we can log the value
// var change = getMilk(7);
// console.log("Change remaing: " + change);


function calBottles (startingMoney, costPerBottle) {

  var totalBottles = Math.floor(startingMoney/costPerBottle);
  // console.log("buy " + totalBottles + " bottles of the milk");
  return totalBottles
}

// var change = getMilk(5);
// console.log("Change remaing: " + change);

function calChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle
  return change
}

console.log("Hello Master, this is your remaining " + getMilk(5, 2.5) + " change.");



// BMI = weight(kg) / height square (m square)
function bmiCalculator(weight, height){
  // var calBMIValue = Math.floor(weight/(height * height));
  var calBMIValue = Math.round(weight/Math.pow(height, 2));

  return calBMIValue;
}

var bmi = bmiCalculator(65, 1.8)
console.log(bmi);


/* Math.pow():- use for power of two or any number, raise a number to power.
  Math.pow(base, exponent) */

/* Math.round(): to round a number to nearest whole number */

/*
In JavaScript, Math.floor() always rounds a number down to the nearest integer, 
while Math.round() rounds to the nearest integer, either up or down, depending on the decimal value. 

Here's a more detailed explanation:
Math.floor(x):
Returns the largest integer less than or equal to x. 
Essentially, it truncates the decimal part of the number. 
For example:
Math.floor(2.9) returns 2. 
Math.floor(2.1) returns 2. 
Math.floor(-2.9) returns -3. 

Math.round(x):
Rounds x to the nearest integer. 
If the decimal part is 0.5 or greater, it rounds up; otherwise, it rounds down. 
For example:
Math.round(2.9) returns 3. 
Math.round(2.1) returns 2. 
Math.round(2.5) returns 3. 
Math.round(-2.9) returns -3. 
Math.round(-2.5) returns -3. 
*/