function newItem(){
  //creating close button
  var span = document.createElement("span");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);

  //creating the li
  var li = document.createElement("li");
  var value = document.getElementById("input").value;
  var text = document.createTextNode(value);
  li.appendChild(text);
  li.appendChild(span);
  if(value === ''){
    alert("You have to write something.");
  }
  else{
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";
}
