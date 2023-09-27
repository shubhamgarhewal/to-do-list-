function newElement(){
    var li = document.createElement("li"); // create a new eliment "li"
    var inputValue = document.getElementById ("myInput").value; // store the (value or text) in the (variable inputValue) which user has written in input bar.

    // li.innerHTML= inputValue; 
    // we can use .innerHTML directly to add the value of (variable inputValue) to the list (li).

    //Alternatively ->

    var textNode = document.createTextNode(inputValue); // create another (variable textNode) in which we create a text node and store the inputValue, and then we can append the value of the variable textNode to the list (li). 

    li.appendChild(textNode); // 

    // var inputValue = document.getElementById("myOL").appendChild(li);

    if(inputValue === ""){
        alert("Enter some text");
    } 
    else{
        document.getElementById("myOL").appendChild(li);
    }
    // document.getElementById("myOL").appendChild(li); this line will do the same thing as above line var inputValue = document.getElementById("myOL").appendChild(li);

    document.getElementById("myInput").value = ""; // this line will again empty the input feild after adding the task to write another task.

    //here we create a remove button next to our li 
    var x = document.createElement("BUTTON");
    var text = document.createTextNode("Remove");
    x.id = "removeBtn"; // here we are assigning (id = "removeBtn") to each button element.
    x.appendChild(text);
    li.appendChild(x); //this lines means that we are appending a child element "x" to the parent element "li".
    // var hr = document.createElement("hr");
    // li.appendChild(hr);
    // x is the button element
    
    for(var i = 0; i < removeBtn.length; i++){ 
        removeBtn[i].onclick = function(){
            var div = this.parentElement; //here 'this' is referring to child element x with id= "removeBtn[i]" with index of "i" and the parent element is "li".
            div.style.display = "none";
        }
    } //here by div.style.display = "none"; we are removing the parent element "li" of child element x with id= "removeBtn[i]"  by changing the display property of (variable div) to "none"  when the remove button is clicked.
}

