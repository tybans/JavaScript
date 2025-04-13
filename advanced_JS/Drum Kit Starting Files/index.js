// document.querySelector("button").addEventListener("click",  () => {
//   alert("I got clicked!");
// });

/*
The method addEventListener() works by adding a function, or an object that implements a handleEvent() function, to the list of event listeners for the specified event type on the EventTarget on which it's called.
*/
// This function will be called when the button is clicked

// A function that does something when a button is clcked

// function handleClicked() {
//   alert("I got clicked!");
// }
/*
We basically our button to trigger this function when it receives a click.
So, we first have to select a button inside the HTML and add an event listener that listens for when it get clicked 
*/

// Detecting button press
var drumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); // this is the button that was pressed
  // this.innerHTML is the button that was pressed
  });
}


// Detecting keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key)
  buttonAnimation(event.key); // this is the key that was pressed
  
})
  

// ======================================================================================
/*
Challenge: Create a function that takes a character and checks it against the switch statement in order to play the correct sound, and then we are going to call it inside the event listener for the keypress, as well as the eventlistener for our drum buttons.
*/

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log(buttonInnerHTML);
      
  }
}



function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 200);
}