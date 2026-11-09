let list = ['pear', 'apple', 'orange'];

function add_new_flavor(new_flavor) {
	list.push(new_flavor);
	alert(new_flavor + ' has been added!');
}

let position = list.indexOf('apple');
if (position >= 0) {
	list.splice(position, 1);
}

function list_all_flavors() {
	let all_items = '';

	for (let item of list) {
		if (all_items != '') all_items = all_items + ', ';
		all_items = all_items + item;
	}

	alert('Your list has: ' + all_items);
}

// <button  onclick="list_all_flavor()"></button>
