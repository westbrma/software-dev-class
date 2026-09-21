window.onerror = (error) => {
	alert(error);
};

// string, number, list, object

let greeting = 'hello';
const greeting2 = 'hello';

greeting = '';

let some_number = 123;

let fruit = ['apples', 'orange', 'pears'];

fruit.push('carrots');

let first_fruit = fruit[0];

if (first_fruit == 'pears') {
	alert(first_fruit);
}

function list_my_fruit() {
	// loop the list by index
	/*for (let i = 0; i < fruit.length; i++) {
		alert(fruit[i]);
	}*/

	// loop list using value
	for (let f of fruit) {
		alert(f);
	}
}

function add_fruit() {
	let new_fruit = document.getElementById('new_fruit_input').value;
	fruit.push(new_fruit);
}
