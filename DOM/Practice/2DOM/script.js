/*
Dom stands for Document Object Model:- 
Static to Dynamic.

If we want our website to be Interactive, then we need to be able to change/ Manipulate the HTML elements on the fly.

When a user clicks on a button, we'll need to respond to that by changing the content or the appearance of our website.
*/

/*
It basically catalogs the web page into individual objets that we can select and manipulate.
*/

/*
Now, the task of converting an HTML file into a DOM is done by the browser.
The browser turns each of these elements and their associated data into a tree structure with a whole bunch of objects that you can select and manipulte.

All the of the elements in our HTML convert into objects, and their relationships to each other mapped out in the tree diagram.
*/

/*
So, our objects inside the DOM can have properties and methods. Now properties describe something about the object, and methods are the things that the object can do.
For example, a Car object might have properties like color, make, and model. And it might have methods like drive, stop, and park.
So, we can use JavaScript to manipulate the properties and methods of the objects in the DOM, and its all done using the dot notation.
*/

/*
Properties:-
Properties are like variables that belong to an object. So, if we have an object called car, we can say car.color = "blue"; to set the color property of the car object to blue.

If our object is car, we say 
car.color;
to get the value of the property. So this is called a GETTER.
In this case if we run this code it will give us the value of the color property of the car object.

If we want to change the value of the color property, we can do that too. We can say car.color = "red"; and this is called a SETTER.

So this will change the value of the color property of the car object to red.
So we can use the dot notation to get and set properties of objects in the DOM.
*/

/**
Methods:-
Methods are like functions that belong to an object. So, if we have an object called car, we can say car.drive(); to call the drive method of the car object.
*/

/*
Difference between Method and Function:-
A method is a function that belongs to an object. So, if we have an object called car, we can say car.drive(); to call the drive method of the car object.

A function is a standalone block of code that can be called from anywhere in the code. So, if we have a function called drive(), we can call it like this: drive();.
*/

/*
Challenge:-
Download the resources, where you will find all three files, index.html, script.js, and style.css
Select the 3rd li and change the text from the word "Third" to your name or anything you want, but you can't touch the html file, you have to do it inside the console
*/