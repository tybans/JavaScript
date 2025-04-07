/*
What is Fibonacci Sequence?
The first two digits start with 0 and 1, every subsequent number in this sequence is created by adding the two previous numbers.

E.g.- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 0 + 1 = 1
 1 + 1 = 2
 1 + 2 = 3
 2 + 3 = 5 and so on
*/

/*
The Fibonacci Exercise
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

Where every number is the sum of the two previous ones.

e.g. 0, 1, 1, 2, 3, 5 comes from

0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5

etc.
*/
/*
Challenge
Create a function where you can call it by writing the code:

fibonacciGenerator (n)

Where n is the number of items in the sequence.

So I should be able to call:

fibonacciGenerator(3) and get

[0,1,1]

as the output.

IMPORTANT: The solution checker is expecting an array as the correct output.

Do NOT change any of the existing code.

You do NOT need any alerts or prompts, the result should be returned from the function as an output.

The first two numbers in the sequence must be 0 and 1.
*/

function fibonacciGenerator(n) {
  // Declare an empty array to store the Fibonacci sequence
  let fibonacci = [];

  // Loop through n times to generate the Fibonacci sequence
  for (let i = 0; i < n; i++) {
    // For the first two numbers, push 0 and 1 into the array
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      // For subsequent numbers, push the sum of the last two numbers in the array
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }

  // Return the generated Fibonacci sequence
  return fibonacci;
}

console.log(fibonacciGenerator(9)); // []

// fibonacciGenerator(3); // [0, 1, 1]