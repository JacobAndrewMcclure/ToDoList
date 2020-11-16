//Variable for user input
let userInput = document.getElementById("inputField");
//List item variables for appending
let node;
let textNode;

//allows to hit enter to add item
userInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addBtn").click()
    }
})

//focus cursor on text input when window loads
window.onload = function() {
    document.getElementById("inputField").focus();
}

function addItem() {
    //Take user input from input field after button push & assign to variable
    userInput = document.getElementById("inputField").value;
    //Clear input field after user input has been accepted
    document.getElementById("inputField").value = "";
    //Verifies user input is not an empty string
    if (userInput == "") {
        alert("Enter a valid item!");
    } else if (userInput == " ") {
        alert("Enter a valid item!");
    } else if (userInput == "  ") {
        alert("Enter a valid item!"); 
    //If string checks out it will continue
    } else {
        //Create LI element
        node = document.createElement("LI");
        //Create text node to store user input
        textNode = document.createTextNode(userInput);
        //Append userinput to LI element
        node.appendChild(textNode);
        //Append LI element to UL section
        document.getElementById("userList").appendChild(node);
        //event listener to respond to click evenets
        node.addEventListener("click", crossItem);
        node.addEventListener("dblclick", removeItem);
    }
}
//crosses item off if clicked
function crossItem(event) {
    //assigns clicked event to X
    let x = event.target;
    //lines through the clicked item (AKA X)
    x.style.textDecoration = "line-through";
    //Focus cursor on text box
    document.getElementById("inputField").focus();
}

//Function to remove added item via clcik
function removeItem(event) {
    //assigns item event to x
    let x = event.target;
    //assigns parent of clicked item to y
    let y = x.parentElement;
    //removes child of click event (AKA X or clicked item)
    y.removeChild(x);
    //focus curso on text box
    document.getElementById("inputField").focus();
}