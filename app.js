function newItem(){
  var li = document.createElement("li");
  var value = document.getElementById("input").value;
  var text = document.createTextNode(value);
  li.appendChild(text);
  li.class = "item";
  if(value === ''){
    alert('If you don\'t write something, then you don\'t need a list.!');
  }
  else{
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";
}

function selectItem(){

}
