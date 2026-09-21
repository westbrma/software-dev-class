// variables

let string_var = 'hello world';

// cannot be changed
const some_const_int = 123;

let some_list = ['apples', 'oranges', 'pears'];

function some_function() {
	// loop over a list (for loop)
	for (let i = 0; i < some_list.length; i++) {
		alert(some_list[i]);
	}

	// loop over a list (for of)
	for (let fruit of some_list) {
		alert(fruit);
	}

	// condition (do something if true)
	if (some_const_int == 123) {
		alert('its true!');
	}

	// get a handle to an element by id
	const el = document.getElementById('element_id');
	// get element value
	alert(el.value);

	// get element innerText
	alert(el.innerText);

	// set element innerText
	el.innerText = 'Hello!';
}
