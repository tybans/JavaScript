/*
Create a function, and you can call it anything you want, and call it inside the console, and when you do, it should print out all of the lyrics of 99 bottles of beer on the wall
*/

var numberOfBottles = 99;
function beer() {
  while (numberOfBottles >= 0) {
    var bottleWord = "bottles"
    if(bottleWord ===1) {
      bottleWord = "bottle"
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");

    
  }
}

var totalBeer = beer()
console.log(totalBeer);
