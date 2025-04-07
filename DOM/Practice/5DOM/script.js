/*
One of the things that we can tap into is something called a classList, and it's a property of every DOM object.
So, for example, if we query for our button and we tap into its calassList property, then you can see that it gives us a list of the classes that are attached to this element that we found.

document.querySelector("button").classList;
DOMTokenList ['btn', value: 'btn']

So, the element in this case is our button, and you can see that inside the class attribute we have only got a single class, which is 'btn'.

Now, once we have the list of classes, then we can use methods, for example, .add, and we can add classes to this class list.
Fore example, 
 document.querySelector("button").classList.add("invisible");

So, if we add a class called new-class, then we can see that the class list now has two classes inside of it.

Now, what this allows us to do is we can tap into the stylesheet and we can create a separate style for the "invisible" class.



 document.querySelector("button").classList.add("invisible");
 document.querySelector("button").classList.remove("invisible");
 document.querySelector("button").classList.toggle("invisible");
 document.querySelector("button").classList.toggle("invisible");


  document.querySelector("h1").classList.add("huge");
  If we hit enter, our h1 has become 10rem, red and bold, and all of those styles got applied to it just by using a single line of JavaScript and keeping our code separated

*/