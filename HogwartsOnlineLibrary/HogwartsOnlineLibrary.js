function clickMe(){
  document.getElementById("Change").style.visibility="hidden";
  document.getElementById("Change2").style.visibility="visible";
  document.getElementById("Button1").style.visibility="hidden";
  document.getElementById("Button2").style.visibility="visible";
  document.getElementById("Change").style.display="none";
  document.getElementById("Change2").style.display="block";
  document.getElementById("Button1").style.display="none";
  document.getElementById("Button2").style.display="block";
}

function clickMe2(){
  document.getElementById("Change2").style.visibility="hidden";
  document.getElementById("Change").style.visibility="visible";
  document.getElementById("Button2").style.visibility="hidden";
  document.getElementById("Button1").style.visibility="visible";
  document.getElementById("Change2").style.display="none";
  document.getElementById("Change").style.display="block";
  document.getElementById("Button2").style.display="none";
  document.getElementById("Button1").style.display="block";
}

setTimeout(function(){alert("Are you interested in buying paperback textbooks? Visit Amazon for great prices on these textbooks and more!")}, 4000);
