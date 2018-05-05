//First calculator program

function calc1() {
  var firstNum = prompt("Enter a number");
  var secondNum = prompt("Enter another number");

  var numOne = Number(firstNum);
  var numTwo = Number(secondNum);

  alert("The sum is: " + (numOne+numTwo));
}

function calc2() {
  var firstNum = prompt("Enter a number");
  var secondNum = prompt("Enter another number");
  var choice = prompt("What would you like to do? \nADD? \nSUBTRACT? \nMULTIPLY? \nDIVIDE?");
  var answer = choice.toLowerCase();

  if(answer==="add") {
    var results = Number(firstNum) + Number(secondNum);
    alert(results);
  }
  else if(answer==="subtract") {
    var results = Number(firstNum) - Number(secondNum);
    alert(results);
  }
  else if(answer==="multiply") {
    var results = Number(firstNum) * Number(secondNum);
    alert(results);
  }
  else if(answer==="divide") {
    var results = Number(firstNum) / Number(secondNum);
    alert(results);
  }
}
