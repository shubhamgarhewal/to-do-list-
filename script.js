function myFunction(){
const value = document.getElementById ("text").value;
const node = document.createElement("li");
const textnode = document.createTextNode(value);
node.appendChild(textnode);
document.getElementById("task").appendChild(node);
}