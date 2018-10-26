function newItem(){
  //creating close button (span)
  var close = document.createElement("span");
  var txt = document.createTextNode("x");
  close.className = "close";
  close.appendChild(txt);
  close.onclick = function () {
    var item = this.parentElement;
    item.parentElement.removeChild(item);
  }

  //creating edit button (span)
  var edit = document.createElement("span");
  var txt = document.createTextNode("Edit");
  edit.className = "edit";
  edit.appendChild(txt);
  edit.onclick = function () {
  var newTxt = prompt("Edit \"" + this.parentElement.firstChild.nodeValue + "\":");
    if (newTxt === '') {
      alert('You have to write something.');
    }
    else {
      this.parentElement.firstChild.nodeValue = newTxt;
    }
    this.parentElement.className = 'checked';
  }

  //creating the li
  var li = document.createElement("li");
  var value = document.getElementById("input").value;
  var text = document.createTextNode(value);
  li.appendChild(text);
  li.appendChild(close);
  li.appendChild(edit);
  if(value === ''){
    alert("You have to write something.");
  }
  else{
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";

  li.onclick = function () {
   if (this.className == 'checked') {
     this.className = undefined;
     return;
   }
   this.className = 'checked';
 }

}
