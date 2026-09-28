let some_list = [1, 2, 3, 4, 5];

// for loop by condition, i is a variable that will hold the index of the current iteration
for (let i = 0; i < some_list.length; i++) {
	let value = some_list[i];
	alert(value);
}

// for loop by item
for (let value of some_list) {
	alert(value);
}

// do something while condition is true
while (some_list.length > 0) {
	// splice lets you remove items in a list by index
	some_list.splice(0, 1);
}
