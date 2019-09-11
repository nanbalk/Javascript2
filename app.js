// var nan = window.document.getElementById("hello");
// nan.innerHTML = "Different Text";
// nan.style.color="blue";

var div = window.document.getElementById("hello");
div.style.backgroundColor ="#648880";
div.style.height ="100px";
div.style.width = "200px";
div.style.color = "white";
div.style.padding = "10px";
div.style.borderRadius ="24px";
div.style.boxShadow ="grey 5px 3px 7px 5px";

var p =document.createElement("p");
p.style.color ="white";
p.style.fontSize="20px";
p.style.fontStyle= "italic";
p.style.padding = "0px 10px";
var text= "Having a feel of Javascript and HTML";
p.innerHTML = text;
div.appendChild(p);
console.log(p);