function getTotal(){
  var numberOne = document.getElementById("numberOne").value;
  var numberTwo = document.getElementById("numberTwo").value;
  var rightNumber1 = Number(numberOne);
  var rightNumber2 = Number(numberTwo);
  var total = rightNumber1 + rightNumber2;
  document.getElementById("output").innerHTML = total;
}
