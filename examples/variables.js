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

// variable of a list (see lists section)
const list = ['Apple', 'Orange', 'Pear'];

// objects are very cool, they can combine a set of variables and functions into a single variable
// variable of an object
const some_person = {
	name: 'Mark',
	favorite_color: 'blue',
	car: 'Honda',
	greet: () => alert(`Hello ${this.name}!`)
};

// variables inside an object called "properties"
// even elements are objects with properties and functions
document.getElementById('#some_element_id');
document.body.style.background = 'Orange';
document.addEventListener('DOMContentLoaded', () => alert('DOM is ready!'));
