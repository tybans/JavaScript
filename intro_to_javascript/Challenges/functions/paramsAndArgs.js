/* What if I have the ability to not only say getMilk(), which executes all of the commands insidethe the getMilk function, but what if I could say getMilk and insidenthe parenthesis, I specify the number of bottles of milk that I want the robot to get? */

/* In order to do this, we have to modify our simple function a little bit, and we have to allow it to accept inputs, whereas previously we had nothing between the parentheses because that function didn't take any inputs */

/* In this case, we are putting in the name of the input that is going to go into this function and allows it to be used inside the series of instructions. */

/* So, In this case when we call getMilk(), it's still going to execute all of these console to the robot to command it to do something  */

function getMilk() {
  console.log("leave the house");
  console.log("move to right");
  console.log("go to shop");
  console.log("get the milk");
  console.log("pay the amount");
  console.log("move back");
  console.log("come back home");
  console.log("move to left");
  console.log("put the milk in kitchen");
}

getMilk();