/*
While Loops:-

while (something is true) {
  // Do something
}

In between the parentheses, there is statement, and while that statement is ture, then the code inside the curly braces will run again and again and again until that statement is no longer true.
*/

// e.g.
var i = 1;
while (i < 5) {
  console.log(i);
  i++;
}

var output = [];
var count = 1;
function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

    count++;
  }
  console.log(output);
}

// for (let index = 0; index < 16; index++) {
//   fizzBuzz();
// }
fizzBuzz();
