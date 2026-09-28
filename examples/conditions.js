// conditions allow you to control you logic using statements that resolve to true or false

// if statement
if ('tesing'.includes('ing')) {
	alert('this word has "ing" in it');
}

let some_number = parseInt(prompt('Enter a number'));

// if, else if, else
// equality operators: ==, <=, >=, >, <
if (some_number == 10) {
	alert('your number is 10');
} else if (some_number < 10) {
	alert('your number is less then 10');
} else if (some_number > 10) {
	alert('your number is greater than 10');
} else {
	alert('your number is between 1 and 10');
}

// switch statements:
switch (some_number) {
	case 1:
		alert('your number is 1');
		break;
	case 2:
		alert('your number is 2');
		break;
	case 3:
	case 4:
		alert('your number is 3 or 4');
		break;
	default:
		alert('Your number is not 1,2,3 or 4');
}

// you can NOT a condition to make it equal true
if (some_number != 10) {
	alert('Your number is not 10');
}

let is_big_number = some_number > 10;
if (!is_big_number) {
	alert('this is not a big number');
}
