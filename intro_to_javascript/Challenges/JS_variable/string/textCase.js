var myName = "Taiyab";
var updatedMyName= myName.toUpperCase();
console.log(updatedMyName);

myName = myName.toLowerCase()
console.log(myName);


// Create a prompt that asks the user for their name, but if they give you a name that is uppercase or lowercase, I want you to be able to send them an alert that says "Hello" and then their name, but the name has to be capitalized, but only for the first character and none the of the rest of the characters.

/* Solution: 
  1- We need to create a var that stores the name that user enters via prompt 
  2- Capitalize the first letter of the name 
  3- We use the capitalized version of their name to greet them using an alert.

*/


var textBox = prompt("What is your name?")
var cap = textBox.slice(0,1).toUpperCase()
var lower = textBox.slice(1,textBox.length)
alert("Hello " + cap + lower)

