// Slice basically allows to slice and dice string to separate them into individual characters

var myName = "Taiyab"
var sliced = myName.slice(0,1) // This means I am trying to take the slice out of this string from position 0 all the way to, but not including position 1
var sliced2 = myName.slice(0,3) // This means slice out from postion 0 all the way to, but not including postion 3

// console.log(sliced);
// console.log(sliced2);


// Write some code that creates a prompt, and when you paste in a large paragraph of text, then it should give you an alert that cuts your tweet down to only 140 characters

// NOTE:- Prompt and alert will only work in browser.
var textBox = prompt("Write something in 140 characters!");
var sliced = textBox.slice(0,140);
alert(sliced);

// =======OR========

alert(prompt("Write something in 140 characters!").slice(0,140))