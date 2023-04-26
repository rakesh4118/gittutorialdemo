//TRAVERSING THE DOM
var items = document.querySelector("#items");

//parentnode
//console.log(items.parentNode);
// items.parentNode.style.backgroundColor = "orange"
// console.log(items.parentNode.parentNode);

// // parentElement
// console.log(items.parentElement);
// items.parentElement.style.backgroundColor = "orange"
// console.log(items.parentElement.parentElement);

// childNodes
//console.log(items.childNodes);
// console.log(items.children);
// items.children[1].style.backgroundColor = "yellow"


// //firstChild
// console.log(items.firstChild);

// //firstElementChild
// console.log(items.firstElementChild);

// //lastChild
// console.log(items.lastChild);

// //lastElementChild
// console.log(items.lastElementChild);
// items.lastElementChild.textContent ="Hello"

//nextSibling
//console.log(items.nextSibling);

// //nextElementSibling
// console.log(items.nextElementSibling)

// //previousSibling
// console.log(items.previousSibling)

// //previousElementSibling
// console.log(items.previousElementSibling)
//items.previousElementSibling.style.color = "green"

// //createElement
var newDiv = document.createElement("div");

// //Add class
newDiv.className = "hello";

// //Add id
newDiv.id = "hello1";

// // Add attribute
newDiv.setAttribute("title","Hello Div");

//Create text node
var newDivText = document.createTextNode("Hello World");

// //Append child
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

container.insertBefore(newDiv,h1);


//Add element before item 1
var newElement = document.getElementById("items");
newElement.innerHTML = "Hello World" + newElement.innerHTML