/* Numbers:
  var a = 2+3  Addition
  var b = 8-3 Substraction
  var c = 9*7 Multiplication
  var d = 9/3 Division
  var e = 9%6 modulo, it gives you the remainder of the division, so the outcome will be 3

  var cost = 3+5*2 multiplication is going to happen first 
  var cost = 3+ (5*2) here we are making it clear to multiply first
  var cost = (3+5) * 2 here we are making clear to add first

*/

/* Challenge:
  Create a dog age to human age converter, so how old would your dog be if it was a human?
  Formula:- humanAge = (dogAge - 2) * 4 + 21
  Create a prompt to ask the user for the age of that dog, then it's going to calculate the equivalent human age of the dog using the formula, and then it's going to give this answer back to the user through an alert  
*/

var dogAge = prompt("Enter dog age!")
var humanAge = ((dogAge - 2) * 4) + 21   // Precedence rules
alert("Your dog is " + humanAge + " years old in human years.")


// ==========================================================

var x = 5;
x = x + 1;  //6
// OR
x++;  //Increment expression

x--; //Decrement expression output: 4

// This will only change the value by 1
// In order to change more than one value:

x = x + 2
// OR
x +=2 // 7

var y = 8;
x = x + y;
// OR
x += y

/* It also works with 
  +=
  -=
  *=
  /=
*/ 



var x = 3;
var y = x++;
y += 1;
/* In this line: var y = x++ the value of x is assigned to y before x is incremented, so y equals 3 on line 2, while x equals 4. There fore on line 3, y now equals 4 instead of 5. */