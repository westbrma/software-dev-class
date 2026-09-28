// variables: store data to memory so you can refer to it later
let some_var = 'hello';

// const varibles cannot be changes const = constant
const some_constant_var = 'hello world';

// number variable
let some_number = 123;

// increment variable
some_number++;

// string variables contain a list of characters (letters, numbers, symboles)
let some_string = 'hello';

// concat string with other string or number variables
some_string += ' world ' + 123;

// arrays are varibles that contain a list of values (strings, numbers, objects)
const fruit_list = ['apples', 'oranges', 'pears'];

// you can access a certain item in a list by index, lists start with index 0
const oranges = fruit_list[1];

// list varibles and be added to
fruit_list.push('plums');

// loops let you do something for each item in a list or while a condition is true
for (let fruit of fruit_list) {
	alert(fruit);
}

// do something while condition is true
while (fruit_list.length > 0) {
	// splice lets you remove items in a list by index
	fruit_list.splice(0, 1);
}
