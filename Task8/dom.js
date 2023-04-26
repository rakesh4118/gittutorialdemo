var form = document.getElementById("addForm");
var itemList =  document.getElementById("items");
var editList = document.getElementById("items");


// Form submit event
form.addEventListener("submit",addItem);

//Add delete button
itemList.addEventListener("click",removeItem);

//Add edit button
editList.addEventListener();

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById("item").value;

    // Create li

    var li = document.createElement("li");
    //Add class
    li.className = "list-group-item";
    console.log(li);
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    var deleteBtn = document.createElement("button");  
    //Add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //Append text node
    deleteBtn.appendChild(document.createTextNode("X"));
    //Adding button to li
    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li)



    //Create edit button
    var editBtn = document.createElement("button");
    //Add classes to edit button
    editBtn.className = "btn btn-primary float-right edit";
    //Add text node to edit
    editBtn.appendChild(document.createTextNode("EDIT"));
    //Adding edit to li
    li.appendChild(editBtn);
    //Append li to list
    editList.appendChild(li);

    
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    
    }
}