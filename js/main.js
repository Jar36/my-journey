//First calculator program

function calc1() {
  var firstNum = prompt("Enter a number");
  var secondNum = prompt("Enter another number");

  var numOne = Number(firstNum);
  var numTwo = Number(secondNum);

  alert("The sum is: " + (numOne+numTwo));
};

//Second calculator program

function calc2() {
  var firstNum = prompt("Enter a number");
  var secondNum = prompt("Enter another number");
  var choice = prompt("What would you like to do? \nADD? \nSUBTRACT? \nMULTIPLY? \nDIVIDE?");
  var answer = choice.toLowerCase();

  if(answer==="add") {
    var results = Number(firstNum) + Number(secondNum);
    alert("The sum is: " + results);
  }
  else if(answer==="subtract") {
    var results = Number(firstNum) - Number(secondNum);
    alert("The difference is: " + results);
  }
  else if(answer==="multiply") {
    var results = Number(firstNum) * Number(secondNum);
    alert("The product is: " + results);
  }
  else if(answer==="divide") {
    var results = Number(firstNum) / Number(secondNum);
    alert("The quotient is: " + results);
  }

  else {
    alert("Sorry try again...");
  }
};

//Keyless car

function car() {
  var age = prompt("How old are you?");
  var ageResult = Number(age);

  if(ageResult < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
  }

  else if (ageResult === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }

  else if(ageResult > 18) {
    alert("Powering On. Enjoy the ride!");
  }
};

//Keyless car using function declaration

function checkDriverAge1() {
	var age = prompt("What is your age?");
  var ageResult = Number(age);

	if (age < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	}

  else if (age > 18) {
		alert("Powering On. Enjoy the ride!");
	}

  else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
};

//Keyless car using function expression

var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
  var ageResult = Number(age);

	if (age < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	}

  else if (age > 18) {
		alert("Powering On. Enjoy the ride!");
	}

  else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
};

//Keyless car BONUS

function checkDriverAge(age) {
  var ageResult = Number(age);
	if (age < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	}

  else if (age > 18) {
		return "Powering On. Enjoy the ride!";
	}

  else if (age === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
};
