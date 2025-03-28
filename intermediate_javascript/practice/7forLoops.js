/*
For Loop:-

For loop works similarly to a while loop, but instead of testing a condition, we are specifying the number of times that we want the loop to run. 
And the syntax looks something like this 

for(i=0; i<2; i++) {
  // Do somehing
}
*/

for (var i = 1; i<2; i++) {
  console.log(i);
  
}

// So, when we create the for loop we already define the starting point. the ending point and how much i going to change and the code that should be carried out every single time the loop runs


var output = [];

function fizzBuzz() {
  for (var count = 1;count < 50; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

    
  }
  console.log(output);
}

fizzBuzz();


// When to use for loop or while loop?

/*
While loop is essentially checking for a state, so it's while something is true. So, that can be while player one is alive.
And essentially you want to repeatedly run an instruction while the program is in a certian state. 
*/


/*
For loop is essentially trying to iterate, you are trying to run a piece of code many many times and you are going to use the for loop to define how many times
*/