/*console.dir(document);
console.log(document.domain);
console.log(document.URL);

console.log(document.body)
//document.title = "item344";

console.log(document.all)
console.log(document.all[10])*/
var items = document.getElementsByClassName("list-group-item")
console.log(items);
items[2].style.backgroundColor = "green";
for(var i = 0;i<items.length;i++){
    items[i].style.fontWeight = "bold"
}
//items.style.fontWeight = "bold";