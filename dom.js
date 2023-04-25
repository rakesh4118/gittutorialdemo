/*console.dir(document);
console.log(document.domain);
console.log(document.URL);

console.log(document.body)
//document.title = "item344";
console.log(document.doctype)
console.log(document.all)
console.log(document.all[10])*/
var h = document.getElementById("header-title");
var hh = document.getElementsByClassName("title");

//console.log(h);
//h.textContent = "hi";
//h.innerText = "Goodbye"
h.style.borderBottom = "solid 3px #000";
hh[0].style.fontWeight = "bold";
hh[0].style.color = "green";