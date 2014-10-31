function addThreeAndFive() {

  var theForm = document.forms["numform"];

  var num = theForm.elements["num"].value

  var sum = 0;

  for(var i=0; i<=num; i++){
  if (i % 3 === 0 || i % 5 === 0) {
  sum += i;
    }
  }
document.getElementById('totalSum').innerHTML = "The sum of the multiples of 3 and 5 are " + sum;
}
