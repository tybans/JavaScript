/* How can we store a collection of related items into the same container or the same variable? */

/* Array:- It's a cpllection of items that are related, and they can be stored together into the same container or the sane variable */

var guestList = ["Taiyab", "Jack", "Pam", "James", "Lara", "Jason"]
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);

// You can use the functions, like includes() to find out if an array includes a particulr item.
// In this case, if I say guestList.includes()the specific name, then the computer will look through your array and see if it matches with any of the items inside the array. And if it does then this line of code will return true, and if doesn't then it will return false. So we get a boolean as the output of this function.


/*
Challenge:
Write some code that creates a prompt that asks the guest what is their name, which they will then type into the prompt, then you will check their name against all of the names inside our guest list, and if it does exist then it will send an alert saying "Welcome!", and if it doesn't exist we'll tell them "Sorry, may be next time."
 */

var guestName = prompt("Please tell me your name.")

var guestList2 = ["Taiyab", "Jack", "Pam", "James", "Lara", "Jason"]

if(guestList2.includes(guestName)) {
  alert("Welcome " + guestName + "!")
} else{
  alert("Sorry, may be next time")
}