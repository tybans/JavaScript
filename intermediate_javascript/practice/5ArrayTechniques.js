/*
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
*/

// var output = []

/* Push(): In order to add new items into the array */
// output.push(1)
// console.log(output);
// And you can keep doing this output.push
// output.push(2)
// console.log(output);

/* Push(): it always pushes the item that you have in the parentheses to the end of the array, it doesn't push it in randomly into the array or at the beginning, it's always tagged on at the end */

/* Pop(): You can pop items off your array by using the name of the array.pop(), then it will take the last item in the array and it will remove it from the array. */

var output = [];
var count = 1;
function fizzBuzz() {
  
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzBuzz");
  } 
  else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  count++;
  console.log(output);
}

for (let index = 0; index < 16; index++) {
  fizzBuzz();
}
/* Complete this code so that every single time you run the function fizzBuzz, it will add the next number in the sequence to the array called output2 */
