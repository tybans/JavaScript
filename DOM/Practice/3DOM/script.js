// Selecting elements inside the DOM

// Methods:-

/*
1. getElementsByTagName():
  It looks through the web page and it searches for the element with a particular tag name.
  Foe example, if we wanted to get a list item (li) as we have, we have three li items.
  getElementsByTagName("li")

  If we run this line of code , we will get back an array that conatins all three li items.


*/

/*
document.getElementsByTagName("li").style.color = "Yellow"

This will give us an error because getElementsByTagName returns an array of elements, and we can't set the style of an array.
So we need to select a specific element from the array and then set the style of that element.

document.getElementsByTagName("li")[2].style.color = "Yellow"

This will select the third li item and set its color to yellow.
This is how we can select elements inside the DOM using getElementsByTagName method.
*/

/*
If we wanted to know how many elements there were that have the tag name li, then we can simply generate the array of all the items and then call .length to get the length propert.

document.getElementsByTagName("li").length

This will give us the number of li items in the array.
*/

/*
getElementsByClassName():-
It allows to search for elements by their class name.

document.getElementsByClassName("btn")

Now, notice this method also has a plural, Elements, so that means it will return an array of elements that have the class name btn.
So, it doesn't matter how many elements there are, it will always return an array of elements.

So doing this 
document.getElementsByClassName("btn").style.color = "Yellow"
doesn't work because it returns an array of elements, and we can't set the style of an array.
So we need to select a specific element from the array and then set the style of that element.

*/

/*
getElementById():-
you may have noticed this is no plural, and so in fact using this method you only get back one item instead of an array.
And the reasin being is that an id is supposed to be unique, so there should only be one element with that id in the entire document.

document.getElementById("title")

I will only get back a single item as opposed to an array of items.

So if want to change it's innerHTML, we can simply say
document.getElementById("title").innerHTML = "Hello World"

*/

/*
QuerySelector():-

Another method that can be used to select a single element is the querySelector() method.
It allows us to select an element using CSS selectors.
This method is similar to getElementById, also only returns single item, but it works a little bit differently.
Because the string that you are goingto put inside the parentheses is a CSS selector.

document.querySelector("h1")
<h1 id=​"title">​Hello​</h1>​

document.querySelector("#title")
<h1 id=​"title">​Hello​</h1>​

document.querySelector(".btn")
<button class=​"btn">​Click Me​</button>​


Combining ELements:-
// So, we can also combine elements together to select a specific element.
document.querySelector("li a")
so the anchor element is inside the li element, so hierarchical, the child of this parent
<a href=​"https:​/​/​www.google.com">​Google​</a>​
I can also use querySelector to select elements that are nested inside other elements.
document.querySelector("ul li a")

I want the element that has a class of item that is also an li element.
document.querySelector("li.item")
Remember when you are combinig selectors, so things that occur in the same element, then there are no spaces. 
*/

/*
Question:- What if your selector matches more than one object?
document.querySelector("#list .item")
This will select the first element that matches the selector, and ignore the rest.

So, if you want to select all the elements that match the 
selector, you can use querySelectorAll() method.

document.querySelectorAll("#list .item")

This will select all the elements that match the selector, and return an array of elements.
*/

/*
We have seen all of these different types of ways of selecting our HTML elements, which one should you actually use?
Well, querySelector and querySelectorAll allow for more complex queries, because we are able to specify id, class, element, tag names, and combine them in order to target the exact element that we want.
Whereas the getElement methods are more broad and it's more difficult to target individual objects without going in to change the HTML.
So, you will see querySelector and querySelectorAll used more often than the getElement methods.
And in most cases you can use querySelector and querySelectorAll to do all the things that you can do with the getElement methods.
*/

// Challenge:-
// Change the text color of the google link to red.
// Answer:-
// document.querySelector("li a").style.color = "red"
// document.querySelector(".item a").style.color = "red"
// document.querySelector("#list .item a").style.color = "red"



