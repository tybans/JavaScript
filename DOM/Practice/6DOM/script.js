/*
textContent:-
They basically change the text of whichever element that we select,

It's slightly different because the innerHTML does exactly what it says on the tin.
It actually gives you the HTML that's in between the element tags.
For example, if I tried to get the current value of the innerHTML, it's "Hello"
document.querySelector("h1").innerHTML
"Hello"

But let's go into our code and if I add strong tag around the word "Hello", then I also get the strong tags.

document.querySelector("h1").innerHTML
'<strong>Hello</strong>'

But if I try the same thong with textContent, then that's a kind of exactly what it is. It just gives you the text content

document.querySelector("h1").textContent
'Hello'
*/

/*
So, what does it mean that if select the h1 element and then use innerHTML, then it will literally give you all of the HTML that is inside that element's tags, including any other HTML tags.


*/