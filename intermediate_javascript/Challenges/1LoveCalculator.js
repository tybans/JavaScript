/* Challenge:- Love Calculator
  Yoy enter two names and it should give you back a percentage between 1 and 100, and that number is supposed to have some sort of meaning.
  So, create a love calculator, it should have two prompts that ask for the names of the two people, and then it should be able to completely ignore that and then calculate a random number that is a percentage.

  So, your random number generator shold generate a number between 1 and 100. And finally you should give this information back to the user in the form of an alert telling them what is thier love score
*/


// var male = prompt("Write your male partner name");
// var female = prompt("Write your female partner name")
prompt("Write your male partner name");
prompt("Write your female partner name")

var num = Math.random()

num = num * 100
num = Math.floor(num) + 1

alert("Your Love Score: " + num + "%")