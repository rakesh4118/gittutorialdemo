/*console.dir(document);
console.log(document.domain);
console.log(document.URL);

console.log(document.body)
//document.title = "item344";

console.log(document.all)
console.log(document.all[10])*/
var items = document.getElementsByClassName("list-group-item");
for(var i = 0;i < items.length;i++){
    items[i].style.backgroundColor = "#f5f5f5";
}
/*var li = document.getElementsByTagName("li")
console.log(li);
for(var i = 0;i<li.length;i++){
    li[i].style.backgroundColor = "#f1f1f1";
}*/
