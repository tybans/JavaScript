// We acn easily figure out the number of characters in string by simply tapping into its "Length" property.

var myName = "Taiyab";
console.log(myName.length);

// Write some JS code in order to create a prompt where the user can enter a long string such as a paragraph of text from a blog post and you will tell them how many characters they have written and also how many characters they have remaining out of 140 or 280 characters.
// Output should be : You have written 182 characters, you have -42 charactrers left.


var textBox = prompt("write something in 280 characters")
var textLentgh = textBox.length
var written = textLentgh
var left = 280 - written

alert("You have written "+ written + " characters, you have " + left + " charcters left")


