var mylist=document.getElementsByTagName("li");
for(var i=0; i<mylist.length; i++){
    var span=document.createElement("span")
    mylist[i].appendChild(span);
    var textnode=document.createTextNode("\u00D7");
    span.appendChild(textnode);
    span.className="close";
}

var myclass=document.getElementsByClassName("close");
for(var i=0; i<myclass.length; i++){
    myclass[i].addEventListener("click",function(){
       var div=this.parentElement;
       div.style.display="none";
    },false);

}

var list=document.querySelector("ul");
list.addEventListener("click",function(ev){
    if(ev.target.tagName==="LI"){
 ev.target.classList.toggle("checked");
    }
},false);

function AddElement(){
    var nodelist=document.createElement("li");
    var myinputvalue=document.getElementById("myInput").value;
    var textnode=document.createTextNode(myinputvalue);
    nodelist.appendChild(textnode);
  var ul= document.getElementById("myUL");
  ul.appendChild(nodelist);
   var mylist=document.getElementsByTagName("li");
for(var i=0; i<mylist.length; i++){
    var span=document.createElement("span")
    mylist[i].appendChild(span);
    var textnode=document.createTextNode("\u00D7");
    span.appendChild(textnode);
    span.className="close";
}

var myclass=document.getElementsByClassName("close");
for(var i=0; i<myclass.length; i++){
    myclass[i].addEventListener("click",function(){
       var div=this.parentElement;
       div.style.display="none";
    },false);

}
}
