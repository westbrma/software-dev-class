// lists (array) are useful for working with a collection values or objects

// an array of strings
const fruit = ['apples', 'oranges', 'pears'];

// an array of numbers
const number_list = [5, 4, 3, 2, 1];

// a list of objects
const list = [
	{ name: 'Apple', count: 5 },
	{ name: 'Orange', count: 5 },
	{ name: 'Pear', count: 5 }
];

// loop a list (do something for each item)
let sum = 0;
for (let item of list) {
	sum += item.count;
}

// you can refer to an item in a list by index, indexes start at 0
let second_fruit = fruit[1];

// list varibles and be added to
fruit_list.push('plums');

// find index of an item
let index = fruit.indexOf('Orange');

// remove item in a list by index
list.splice(index, 1);

// return a random item in a list
function get_random_item(list) {
	state.word = list[Math.floor(Math.random() * list.length)];
}

let random_fruit = get_random_item(fruit);

// arrays hav many functions
alert(fruit.join(', ')); // Apple, Orange, Pear
