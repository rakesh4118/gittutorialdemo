/*console.dir(document);
console.log(document.domain);
console.log(document.URL);






// QUERY SELECTOR

/*var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

var seconditem = document.querySelector(".list-group-item:nth-child(2)");
seconditem.style.backgroundColor = "green"

var thirditem = document.querySelector(".list-group-item:nth-child(3)");
thirditem.style.display ="none";*/

// QUERY SELECTORALL
var items = document.querySelectorAll(".list-group-item");
items[1].style.color = "green";

var odd = document.querySelectorAll("li:nth-child(odd)");

for(var i = 0;i < odd.length;i++){
    odd[i].style.backgroundColor = "green"
}
