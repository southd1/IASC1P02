function aName(){
  var number = document.getElementById("inputNumber").value;

  for (i=0;i<=number;i++){
    document.getElementById("Paragraph").innerHTML += i+ "<br/>";
  }
}
