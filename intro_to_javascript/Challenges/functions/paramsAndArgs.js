/* What if I have the ability to not only say getMilk(), which executes all of the commands inside the the getMilk function, but what if I could say getMilk and inside the parenthesis, I specify the number of bottles of milk that I want the robot to get? */

/* In order to do this, we have to modify our simple function a little bit, and we have to allow it to accept inputs, whereas previously we had nothing between the parentheses because that function didn't take any inputs */

/* In this case, we are putting in the name of the input that is going to go into this function and allows it to be used inside the series of instructions. */

/* So, In this case when we call getMilk(), it's still going to execute all of these console to the robot to command it to do something  */

function getMilk(money) {
  var bottleCost = money / 1.5;

  // Math.floor(), to round numbers
  var totalBottles = Math.floor(bottleCost);

  console.log("leave the house");
  console.log("move to right");
  console.log("go to shop");
  console.log("buy " + totalBottles + " bottles of the milk");
  console.log("pay the amount");
  console.log("move back");
  console.log("come back home");
  console.log("move to left");
  console.log("put the milk in kitchen");
}

getMilk(5);

/* Challenge:
  Change this code to take money instead of bottles and use it to calculate the number of bottles the robot is able to buy.
  E.g.:- If yoy gave your robot $10 and a bottle of milk costs $1.5, you should be able to modify your function to calculate how many bottles of milk the robot is able to buy based on the amount of money that you gave the robot.
  So, see if you can modify this function in order to take an amount of money as an input and be able to change the console log to state how many bottles of milk it's going to buy based on how much money it got

*/

// Chocolate flavour functions

function lifeInWeeks(age) {
  var ageLeft = 90 - age;
  console.log(ageLeft);
  
  var days = ageLeft * 365;
  var weeks = ageLeft * 52;
  var months = ageLeft * 12;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}
lifeInWeeks(30)
