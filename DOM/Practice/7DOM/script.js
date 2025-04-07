/*
How to manipulate attributes of any element?

document.querySelector("a").attributes
NamedNodeMap {0: href, href: href, length: 1}


document.querySelector("a").getAttribute("href")
'https://www.google.com'

document.querySelector("a").setAttribute("href", "http://www.bing.com")
undefined


*/