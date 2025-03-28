/* Body Mass Index:
Write a function that outputs (returns) a different message depending on the BMI.

BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.
*/

// BMI = weight(kg) / height square (m square)
function bmiCalculator(weight, height){
  // var bmi = Math.floor(weight/(height * height));
  var bmi = Math.round(weight/Math.pow(height, 2));

  if (bmi < 18.5) {
    console.log("Your BMI is " + bmi + ", so you are underweight.")
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is " + bmi + ", so you have a normal weight.")
  }
  if (bmi > 24.9) {
    console.log("Your BMI is " + bmi + ", so you are overweight.")
  }

  return bmi;
}

bmiCalculator(55, 1.8)
// console.log(bmi);
