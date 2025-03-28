/*
Comparatives:

=== Is equal to :- This is checking whether if the left-hand side is equal to the right-hand side.
!== Is not equal to :- To check whether if the left-hand side is not equal to the right-hand side. 
> :- Is greater than. 
< :- Is less than. 
>= :- Is greater or equal to.
<= :- Is lesser or equal to

*/
 /*
var a = 1;
var b = "1"
if(a===b){
  console.log("Yes")
}else{
  console.log("No")
}
OUTPUT:- No

 Difference between:- 
 == & ===
 They both check for equality, with three equal signs, it's also checking to see that the data types are matching, 
 Whereas with two equal signs it doesn't care about the datatypes
*/


prompt("Write your male partner name");
prompt("Write your female partner name")

var num = Math.random()

num = num * 100
num = Math.floor(num) + 1 // 1 & 100

if (num >80) {
  alert("Your love score is: " + num + "%." + " You love each other like living legend.")
} 
if(num > 50 && num <=70){
  alert("Your love score is: " + num + "%." + " You love each other like whatever.")
}
if(num >30 && num <= 50){
  alert("Your love score is: " + num + "%." + " Your love is crawling.")

}
if(num < 30){
  alert("Your love score is: " + num + "%." + " Your go together like oil and water.")

}

