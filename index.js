/*  What is the DOM?
The DOM (Document Object Model) is a programming interface that represents web page 
content as a structured tree, allowing dynamic manipulation and interaction via 
languages like JavaScript.*/

/* DOM Tree Analogy 
The DOM tree is like a family tree for web pages, where HTML elements are organized 
hierarchically, with the <html> element as the root and nested elements branching out 
like family members. JavaScript interacts with this tree to modify web page content and behavior.*/

/*  Selecting Elements in the DOM
we have 5 way of selecting document Object
//getElementById() don't have need to give "#"
//getElementByclassName() don't have need to give "."
//getElementsByTagName() select element directly
//querySelector() need to give "#"if id and "." is classname
//querySelectrAll() need to give "#"if id and "." is classname
*/

/* Styling an Element

let title = document.querySelector(".main-heading");
title.style.color = "red";
title.style.backgroundColor = "#dfff";
console.log(title);
*/

/*  Creating Elements and add new element

const newliElement = document.createElement("li");
let title = document.querySelector(".movie-list");
newliElement.textContent = "Dragon-ball Z";
title.appendChild(newliElement);
*/

/* Modify Text
newliElement.innerText = "Dragon-ball Z"; it will give the text without indentation.
newliElement.textContent = "Dragon-ball Z";it will give the text with indentation.
newliElement.innerHTML = "Dragon-ball Z"; it will giv the whole tag
*/

/*  Modifying Elements Attributes & Classes
FileList.setAttribute("id", "list-item"); 

Remove an Element
const newliElement = document.createElement("li");
let title = document.querySelector(".movie-list");
newliElement.textContent = "Dragon-ball Z";
newliElement.setAttribute("id", "list-item");
console.log((newliElement.style.backgroundColor = " blue"));
title.appendChild(newliElement);
const li = document.getElementById("list-item");
li.classList.add("active"); // Add class name
li.removeAttribute("id", "list-item");
console.log(li);
console.log(li.classList.contains("class"));
newliElement.removeAttribute("id");
*/

/* Traversing the DOM

# Parent Node Traversal

let mainElement = document.getElementsByClassName("main-heading")[0];
let element = document.querySelector("ul");
let documentELement = document.documentElement;
console.log(mainElement.parentNode);div.container
console.log(mainElement.parentElement);div.container
console.log(element.parentNode);  div.parent-of-ul
console.log(element.parentElement);  div.parent-of-ul
console.log(documentELement.parentNode); #document
console.log(documentELement.parentElement); null


# child Node Traversal
let element = document.querySelector("ul");

console.log(element.childNodes); //it gives you all "li" element  with "text node" the code
console.log(element.firstChild); //it will give you the text Nodes
console.log(element.lastChild); //it will give you the text Nodes

console.log(element.children); //gives you only li element;
console.log(element.firstElementChild); //li
console.log(element.lastElementChild); //last child element


# sibling Node Traversal
let element = document.querySelector("ul");

console.log(element.childNodes);
console.log(element.previousElementSibling); //null becoz no sibling is there i.e no same level of indentation element is there
console.log(element.nextElementSibling); //null becoz no sibling is there i.e no same level of indentation element is there
*/
