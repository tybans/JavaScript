/*
Higher Order Functions:-
Higher-order functions are functions that can take other functions as arguments or return them as output. They are a key feature of functional programming in JavaScript.
*/

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function modulus(num1, num2) {
  return num1 % num2;
} 

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

console.log(calculator(5, 10, add)); // 15
console.log(calculator(5, 10, multiply)); // 50
console.log(calculator(5, 10, subtract)); // -5 
console.log(calculator(5, 10, divide)); // 0.5
console.log(calculator(5, 10, modulus)); // 5

/*
Challenge: Create a full set of operators for our calculator. So, create the code we have already made, so a calculator that takes two inputs and a function as an input, and complete these functions so that we have add function, subtract function, multiply function, divide function, and modulus function. So that when you call the calculator you can say something like, 'Calculator'(5, 10, add) and it will return 15. And then you can do calculator(5, 10, subtract) and it will return -5. And so on for the other functions.
*/

// ================================================================

// JavaScript Objects

var houseKeeper1 = {
  yearsOfExperience : 12,
  name : "Jane",
  cleaningRepetoire : ["bathroom", "lobby", "bedroom"],
}

var houseKeeper2 = {
  yearsOfExperience : 15,
  name : "John",
  cleaningRepetoire : ["bathroom", "lobby", "bedroom"],
}
console.log(houseKeeper1);
console.log(houseKeeper1.yearsOfExperience); // 12
console.log(houseKeeper1.name); // Jane

/*
Constructor Functions:- 
Constructor functions are a way to create objects in JavaScript. They are used to create multiple instances of an object with the same properties and methods. Constructor functions are defined using the 'function' keyword and the first letter of the function name is capitalized.
Constructor function takes a number of inputs, and these are the inputs that we are going to provide when we create new objects from this constructor function.
And inside the constructor function we match the inputs to property names.
For example, we will say this object, .name, is equal to the name that was given as an input when we constructed this object.
*/

/*
Challenge: create a constructor function for houseKeeper1, create a constructor function for any housekeeper objects, and then to create the object houseKeeper1 using that constructor function.
*/

// Constructor function for HouseKeeper object
// The constructor function takes three parameters: yearsOfExperience, name, and cleaningRepetoire
function HouseKeeper(yearsOfExperience, name, cleaningRepetoire) {
  this.yearsOfExperience = yearsOfExperience; // Assign the yearsOfExperience parameter to the yearsOfExperience property of the object
  this.name = name; // Assign the name parameter to the name property of the object
  this.cleaningRepetoire = cleaningRepetoire; // Assign the cleaningRepetoire parameter to the cleaningRepetoire property of the object

  this.clean = function clean() { // Define a method called clean inside the constructor function
    console.log("Cleaning in progress..."); // Log a message to the console when the clean method is called
  }
}
// Create a new instance of the HouseKeeper object using the constructor function
// and pass in the parameters for the constructor function.

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
var houseKeeper2 = new HouseKeeper(15, "John", ["bathroom", "lobby", "bedroom"]);



/*
Methods:-
Methods are functions that are associated with an object. They are used to perform actions on the object or to retrieve information from the object. Methods are defined inside the object and can be called using the dot notation.
*/
houseKeeper1.clean(); // Cleaning in progress...




/*
Higher order function:- We are reffering to the function that's able to take functions as inputs or as arguments or return them as output.
document.addEventListener("keydown", function(event) {
  console.log("key pressed")
})

In this case the addEventListener function is a higher order function because it takes a function as an input.

So, what about the function that gets passed in as an input? Well this is actually called a Callback function. It allows us to wait for something to finish happening.

Fore example, waiting for a click event, and then the callback function gets called back and executed.
*/