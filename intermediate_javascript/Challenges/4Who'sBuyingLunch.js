/*
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output

Michael is going to buy lunch today!


Hint

1. You might need to think about Array.length.

2. Remember that Arrays start at position 0!
 */


var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]


function whosPaying (names){
  // We basically need a random number that is in the range of 0 to 4 if the input was this long,
  // But we don't know how long the input could be.
  // So, Let's first work that out, let's create a variable for number of people

  var numberOfPerson = names.length;
  
  // When we got that info like number of person, then we can work out a random person's position
  // Math.random() is going to generate a number between 0 and 1 and not including 1
  // And then we can multiply it by numberOfPerson, then we would get a range of number from 0 to 0.999999
  // So now if we multiply it by the total number of people, so the number of items in this array
  // So in this example, we would have 5, so 0 multiplied by 5 is going to be 0, but 0.99999... multiplied by 5 is going to become 4.99999...

  // So now we have to use the Math.floor() to cut off everything that's at the end of the decimal place and then we get our range 0 to 4
  // So wrap everything inside a Math.floor()

  var randomPersonPosition =Math.floor(Math.random() * numberOfPerson)

  // So, now pick out the randomPerson
  var randomPerson = names[randomPersonPosition]

  // return the output
  return randomPerson + " is going to buy lunch today!"

}

